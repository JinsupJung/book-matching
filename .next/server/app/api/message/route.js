"use strict";
(() => {
var exports = {};
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 5514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/message/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: ./src/helpers/constants/book-data.ts
const bookData = `
<url>
<loc>https://books.toscrape.com/</loc>
<desc>Your book store</desc>
</url>
<url>
<loc>https://books.toscrape.com/catalogue/category/books_1/index.html</loc>
<desc>An overview about our book collection</desc>
</url>
<url>
<loc>https://books.toscrape.com/catalogue/category/books/travel_2/index.html</loc>
<content>
    <book>
    <url>https://books.toscrape.com/catalogue/its-only-the-himalayas_981/index.html</url>
    <desc>A book about travelling the himalayas</desc>
    <price>45.17</price>
    <availability>in stock</availability>
    </book>
    <book>
    <url>https://books.toscrape.com/catalogue/full-moon-over-noahs-ark-an-odyssey-to-mount-ararat-and-beyond_811/index.html</url>
    <desc>A book by Rick Ansonson about his journey to Mount Ararat</desc>
    <price>49.43</price>
    <availability>in stock</availability>
    </book>
</content>
</url>
<url>
<loc>https://books.toscrape.com/catalogue/category/books/mystery_3/index.html</loc>
<content>
    <book>
    <url>https://books.toscrape.com/catalogue/sharp-objects_997/index.html</url>
    <desc>A book about by Gillian Flynn about Camille Preaker's troubled past</desc>
    <price>47.87</price>
    <availability>in stock</availability>
    </book>
    <book>
    <url>https://books.toscrape.com/catalogue/the-past-never-ends_942/index.html</url>
    <desc>A book by Jackson Burnett about the attourney Chester Morgan. His friend died in an unexplained accidental death.</desc>
    <price>56.50</price>
    <availability>in stock</availability>
    </book>
</content>
</url>
`;

;// CONCATENATED MODULE: ./src/helpers/constants/chatbot-prompt.ts

const chatbotPrompt = `
You are a helpful customer support chatbot embedded on a book store website. You are able to answer questions about the website and its content.
You are also able to answer questions about the books in the store.

Use this bookstore metadata to answer the customer questions:
${bookData}

Only include links in markdown format.
Example: 'You can browse our books [here](https://www.example.com/books)'.
Other than links, use regular text.

Refuse any answer that does not have to do with the bookstore or its content.
Provide short, concise answers.
`;

// EXTERNAL MODULE: ./node_modules/eventsource-parser/dist/index.cjs
var dist = __webpack_require__(895);
;// CONCATENATED MODULE: ./src/lib/openai-stream.ts

async function OpenAIStream(payload) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    let counter = 0;
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`
        },
        method: "POST",
        body: JSON.stringify(payload)
    });
    const stream = new ReadableStream({
        async start (controller) {
            // callback
            function onParse(event) {
                if (event.type === "event") {
                    const data = event.data;
                    // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
                    if (data === "[DONE]") {
                        controller.close();
                        return;
                    }
                    try {
                        const json = JSON.parse(data);
                        const text = json.choices[0].delta?.content || "";
                        if (counter < 2 && (text.match(/\n/) || []).length) {
                            // this is a prefix character (i.e., "\n\n"), do nothing
                            return;
                        }
                        const queue = encoder.encode(text);
                        controller.enqueue(queue);
                        counter++;
                    } catch (e) {
                        // maybe parse error
                        controller.error(e);
                    }
                }
            }
            // stream response (SSE) from OpenAI may be fragmented into multiple chunks
            // this ensures we properly read chunks and invoke an event for each SSE event stream
            const parser = (0,dist/* createParser */.j)(onParse);
            // https://web.dev/streams/#asynchronous-iteration
            for await (const chunk of res.body){
                parser.feed(decoder.decode(chunk));
            }
        }
    });
    return stream;
}

// EXTERNAL MODULE: ./node_modules/zod/lib/index.js
var lib = __webpack_require__(4617);
;// CONCATENATED MODULE: ./src/lib/validators/message.ts

const MessageSchema = lib.z.object({
    id: lib.z.string(),
    text: lib.z.string(),
    isUserMessage: lib.z.boolean()
});
// array validator
const MessageArraySchema = lib.z.array(MessageSchema);

;// CONCATENATED MODULE: ./src/app/api/message/route.ts



async function POST(req) {
    const { messages  } = await req.json();
    const parsedMessages = MessageArraySchema.parse(messages);
    const outboundMessages = parsedMessages.map((message)=>{
        return {
            role: message.isUserMessage ? "user" : "system",
            content: message.text
        };
    });
    // fist slot에 insert
    outboundMessages.unshift({
        role: "system",
        content: chatbotPrompt
    });
    const payload = {
        model: "gpt-3.5-turbo",
        messages: outboundMessages,
        temperature: 0.4,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 150,
        stream: true,
        n: 1
    };
    const stream = await OpenAIStream(payload);
    return new Response(stream);
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fmessage%2Froute&name=app%2Fapi%2Fmessage%2Froute&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Froute.ts&appDir=%2FUsers%2Fjinsup%2FDesktop%2FCoding%2FReact%2Fmax%2F(section%2023)%20nextjs%2Fchatbot-youtube%2Fsrc%2Fapp&appPaths=%2Fapi%2Fmessage%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/message",
    resolvedPagePath: "/Users/jinsup/Desktop/Coding/React/max/(section 23) nextjs/chatbot-youtube/src/app/api/message/route.ts",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/message/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,601,629], () => (__webpack_exec__(5514)));
module.exports = __webpack_exports__;

})();