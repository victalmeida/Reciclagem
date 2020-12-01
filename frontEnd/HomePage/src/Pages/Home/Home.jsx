import React from 'react'

import Header from '../../Components/Header/Header.jsx';
import Section1 from '../../Components/Section1/Section1'
import Section2 from '../../Components/Section2/Section2'
import Section3 from '../../Components/Section3/Section3'
import Footer from '../../Components/Footer/Footer'

const Home = () =>
{
    return(
        <>
        <Header />
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer />
        </>
    );

}

export default Home;