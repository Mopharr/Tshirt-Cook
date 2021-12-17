import Nav from 'components/Nav'
import React from 'react'
import styled from 'styled-components'
import ClothExplore from 'components/Clothing/ClothExplore';
import Details from 'components/Clothing/Details';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import Discover from 'components/Discover';

const Clothing = () => {
    return (
        <Main>
            <Nav />
            <Hero />
            <ClothExplore />
            <Discover />
            <Details />
            <Footer />
        </Main>
    )
}

export default Clothing
const Main = styled.div``
