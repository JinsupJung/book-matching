import "./globals.css";
import { Inter } from "next/font/google";
import Chat from "../components/Chat";
import Providers from '../components/Providers'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "북매치",
  description:
    "북매치를 이용하시면, 다양한 독서 경험을 즐기실 수 있습니다. 당신의 독서 취향에 맞는 책을 제공하며, 추천 알고리즘으로 당신만의 책을 추천해 드립니다. 또한 독서와 관련된 다양한 정보와 이야기들을 함께 할 수 있습니다. 지금 바로 북매치를 방문하여 새로운 독서 경험을 만나보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Chat />
          {children}
        </Providers>
      </body>
    </html>
  );
}
