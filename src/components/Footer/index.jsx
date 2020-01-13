import React from 'react'
import Container from '@components/Container/index.jsx'
import Navigation from '@components/Navigation/index.jsx'
import { StyledFooter, Sitemap, Copyright } from './styles'

const Footer = () => (
  <StyledFooter>

    <Sitemap>
      <Container>
        <Navigation />
      </Container>
    </Sitemap>

    <Copyright>
      <Container />
    </Copyright>

  </StyledFooter>
)

export default Footer