import css from 'styled-jsx/css'
import {colors, breakpoints} from '../../styles/theme'
import { addOpacityToColor } from '../../styles/utils'
const backgroundColor = addOpacityToColor(colors.primary,0.1)
export const globlaStyles = css.global`
  body {
    background-image: radial-gradient( ${backgroundColor} 2px, transparent 1px), radial-gradient(${backgroundColor} 2px, transparent 1px) ;
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
  }
  * {
    box-sizing: border-box;
  }
`
export default css`
  div {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  main {
    background: #fff;
    box-shadow: 0 10px 25px rgba(0,0,0, .1);
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
  @media(min-width: ${breakpoints.mobile}){
    main {
      height: 90vh;
      width: ${breakpoints.mobile};

    }
  }
`