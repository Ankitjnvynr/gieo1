import Layout from '@/components/layout/Layout'
import Past from '@/components/pasthighlight/Past'
import React from 'react'

const page = () => {
  return (
    <>
       <Layout breadcrumbTitle={"IGM Past events"} headerStyle={3} footerStyle={3}>
      
       <Past/>
       </Layout>
    </>
  )
}

export default page