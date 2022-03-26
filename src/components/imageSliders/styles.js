import styled from 'styled-components'
import { config } from '../../utils/main'
const COLORS = config.colors

export const StyledImageSlider = styled.div`
  display: ${props => props.styles.display || "flex"};
  flex-flow: ${props => props.styles.flexFlow || "column nowrap"};
  margin: ${props => props.styles.margin || "auto"};
  max-width: ${props => props.styles.maxWidth || "275px"};
  padding: ${props => props.styles.padding || "1rem"};
  width: ${props => props.styles.width || "100%"};
  img {
    margin: ${props => props.styles.img.margin || "auto"};
    max-width: ${props => props.styles.img.maxWidth || "250px"};
  }
  .slick-next:before {
    color: ${props => props.styles.buttonColor || COLORS.black};
  }
  .slick-prev:before {
    color: ${props => props.styles.buttonColor || COLORS.black};
  }
  @media (min-width: 320px)
  and (max-width: 768px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {
    margin-right, margin-left: auto;
  }
  @media (min-width: 100px)
  and (max-width: 320px)
  and (-webkit-min-device-pixel-ratio: 2) {
    max-width: 250px;
    img {
      max-width: 200px;
    }
  }
`
