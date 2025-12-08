import styled from "styled-components"
import { config } from "../../../utils/main.js"

const COLORS = config.colors
const FONTS = config.fonts
const STATIC_URL = config.urls.static

export const StyledHero = styled.div`
margin: ${props => props.$margin || "5rem auto 0 auto"};
width: 100%;
height: 420px;
display: flex;
background-image: url(${props => `${STATIC_URL}/${props.image}`});
background-size: cover;
background-position: center;
h1 {
  margin: auto;
  max-width: 80%;
  font-family: ${FONTS.button};
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .2em;
  color: ${COLORS.white};
  text-shadow: 2px 2px 8px ${COLORS.black};
  line-height: 150%;
}
@media (min-width: 320px)
and (max-width: 768px)
and (orientation: portrait)
and (-webkit-min-device-pixel-ratio: 2) {
  h1 {
    font-size: 2rem;
  }
}
`
