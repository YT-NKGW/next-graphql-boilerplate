import { ReactNode } from 'react'
import { NextPage } from 'next'

import Header from './Header'
import Footer from './Footer'

type PostsListProps = {
  children: ReactNode
}

const Layout: NextPage<PostsListProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='flex justify-center content-center h-screen w-full py-4'>
        <div className='flex flex-col w-full max-w-3xl'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
