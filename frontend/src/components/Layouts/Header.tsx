import { NextPage } from 'next'

import ToggleTheme from '@/components/Theme/ToggleTheme'

type PostsListProps = {}

const Header: NextPage<PostsListProps> = () => {
  return (
    <header className='flex flex-row justify-center w-full h-10 bg-gray-800 text-white'>
      <div className='flex flex-row justify-between w-full max-w-3xl'>
        <div className='p-2'>
          <h1 className='font-bold'>Z-senshi</h1>
        </div>
        <div className='p-2'>
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}

export default Header
