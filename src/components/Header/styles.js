import styled from 'styled-components'
import { up } from 'styled-breakpoints'

export const Bar = styled.header`
  display: block;
  position: fixed;
  width: 100%;
  box-shadow: 0 0 40px -15px rgba(0,0,0,.4);
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
  z-index: 101;
  top: 0;
  padding: 10px 0;

  ${up('tablet')} {
    padding: 0;
  }
`