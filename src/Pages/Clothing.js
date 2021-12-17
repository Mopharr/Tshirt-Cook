import Nav from 'components/Nav'
import React from 'react'
import styled from 'styled-components'
import ClothExplore from 'components/Clothing/ClothExplore';
import Shop from 'components/Clothing/Shop';
import Details from 'components/Clothing/Details';
import Footer from 'components/Footer';

const Clothing = () => {
    return (
        <Main>
            <Nav />
            <ClothExplore />
            <Shop />
            <Details />
            <Footer />
        </Main>
    )
}

export default Clothing
const Main = styled.div``
