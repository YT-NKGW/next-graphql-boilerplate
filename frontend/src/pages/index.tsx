import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layouts/Layout'
import MembersList from '@/components/Members/MembersList'
import CreateMember from '@/components/Members/CreateMember'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index|Z-senshi</title>
        <meta name="description" content="Z-seshi creator index page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <h2 className='text-xl text-center font-bold mb-4'>
            Z-senshi List
          </h2>
        </div>
        <MembersList />
        <div className='sticky bottom-0'>
          <CreateMember />
        </div>
      </Layout>
    </>
  )
}

export default Home
