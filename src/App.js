import React from 'react'
import styled from 'styled-components'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </Wrapper>)
}

const Wrapper = styled.div`
margin-left: -40px;
`
