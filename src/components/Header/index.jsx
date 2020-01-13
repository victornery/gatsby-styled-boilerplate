import React from 'react'
import { Link } from 'gatsby'
import Container from '@components/Container/index.jsx'
import Icon from '@components/Icon/index.jsx'
import { Bar } from './styles'

const Header = () => (
  <Bar>
    <Container>
      <Link to="/">
        <Icon name="loago" />
      </Link>
      Oi, eu sou a barra do menu!
    </Container>
  </Bar>
)

export default Header