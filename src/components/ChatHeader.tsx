import { FC } from 'react';

interface Props { }

const page: FC<Props> = ({}) => {
  return <div className='w-full flex gap-3 justify-start items-center text-zinc-800'>
    <div className='flex flex-col items-start text-sm'>
        <p className='text-xs'>✐</p>
        <div className='flex gap-1.5 items-center'>
            <p className='bg-green-600 w-2 h-2 rounded-full' />
            <p className='text-xs'>북매칭 AI</p>
        </div>
    </div>
  </div>
};

export default page;