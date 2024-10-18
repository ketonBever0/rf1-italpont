import React from 'react'

import Hero from '../components/Hero/Hero'
import Newsletter from '../components/Newsletter/Newsletter'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'

const Main = () => {
  return (
    <div>
      <Hero />
      {/*<Popular />
      <Offers />*/}
      <Newsletter />
    </div>
  )
}

export default Main