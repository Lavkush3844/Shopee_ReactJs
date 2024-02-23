import React from 'react'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import Collection from '../../components/Collection/Collection'
import Mobiles from '../../components/Mobiles/Mobiles'

const HomePage = () => {
    return (
        <>
            <Banner />
            <Services/>
            <TrendingProducts/>
            <Collection/>
            <Mobiles/>
        </>
    )
}

export default HomePage