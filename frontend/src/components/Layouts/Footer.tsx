import { NextPage } from 'next'

type PostsListProps = {}

const Footer: NextPage<PostsListProps> = () => {
  return (
    <footer className='flex flex-row justify-center w-full h-10 bg-gray-800 text-gray-400'>
      <div className='grid flex-row content-center w-full max-w-3xl'>
        <div className='text-xs text-center'>
          Powered by YT-NKGW
        </div>
      </div>
    </footer>
  )
}

export default Footer
