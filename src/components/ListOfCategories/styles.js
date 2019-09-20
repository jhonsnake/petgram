import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const List = styled.ul`
display:flex;
overflow:scroll;
width:100%;
${props => props.fixed && css`
{
  background:#fff;
  border-radius:60px;
  box-shadow: 0 0 20px rgba(0,0,0,.3);
  transform: scale(.5);
  left:0;
  margin: 0 auto;
  max-width:400px;
  padding:5px;
  position:fixed;
  z-index:1;
  right:0;
  top:-20px;
  
}
`}

`
export const Item = styled.li`
padding:0 8px;

`
