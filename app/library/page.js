import Layout from '@/components/layout/Layout'
import LibraryPage from '@/components/library/LibraryPage'

import React from 'react'

const page = () => {
  return (
    <>
      <Layout headerStyle={3} footerStyle={4}>
      <LibraryPage/>
      </Layout>

    </>
  )
}

export default page