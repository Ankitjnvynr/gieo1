import AwardsSection from '@/components/awards-seminars/AwardsSection/AwardsSection'
import Layout from '@/components/layout/Layout'
import React from 'react'

const page = () => {
  return (
    <>
     <Layout headerStyle={3} footerStyle={3}>
    <AwardsSection />
     </Layout>
    
    </>
  )
}

export default page