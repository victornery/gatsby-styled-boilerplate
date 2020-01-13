import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { pattern } from '@components/GlobalStyle/index.jsx'

export const StyledFooter = styled.footer`
  background: #1b1b1b;
  color: #fff;
  font-weight: 300;
  font-family: ${pattern.font};
  font-size: 16px;
`

export const Sitemap = styled.div`
  padding: 40px 0;
  text-align: center;

  ${up('tablet')} {
    text-align: initial;
  }
`

export const Copyright = styled.div`
  display: block;
  border-top: 1px solid #202020;
  padding: 40px 0;
`