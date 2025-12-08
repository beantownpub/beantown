import React from 'react'
import { createRoot } from "react-dom/client"
import { Footer } from './components/content/footer/main.js'
import ReactRoutes from './reactRoutes.js'
import { config } from './utils/main.js'
import { MainMenuBar } from "@jalgraves/react-components-library"
const COLORS = config.colors
const FONTS = config.fonts
const PAGES = config.pages
const IMG_STYLES = {
  margin: ".5em auto",
  padding: "1em 0",
  maxWidth: "60vw",
  maxHeight: "4rem",
  position: "absolute",
  left: "4rem",
  top: "1rem"
}

const container = document.getElementById("app")
const footerContainer = document.getElementById("footer")
const topBarContainer = document.getElementById("topBar")
const app = createRoot(container)
const footer = createRoot(footerContainer)
const topBar = createRoot(topBarContainer)

const slideMenu = {
  backgroundColor: COLORS.topMenuBackground,
  border: `.1rem solid ${COLORS.black}`,
  fontColor: COLORS.yellow,
  fontFamily: FONTS.content,
  footer: {
    text: `Est. 1999`,
    fontFamily: FONTS.script,
    fontColor: COLORS.yellow,
    fontSize: "2rem",
    fontWeight: "900",
    textTransform: "none"
  },

  linkList: {
    borderRadius: "4px",
    fontFamily: FONTS.content,
    fontColor: COLORS.white,
    fontSize: "1.5rem",
    fontWeight: "900",
    outline: `1px solid ${COLORS.yellow}`,
    margin: "2rem auto",
    pages: PAGES,
    position: "relative",
    hoverColor: COLORS.red,
    width: "100%",
    iconStyle: {
      color: COLORS.yellow,
      fontSize: "1em"
    }
  },
  header: {
    fontFamily: FONTS.content,
    imgSource: `/images/script_logo.png`
  }
}

topBar.render(
  <MainMenuBar
    barColor={COLORS.black}
    fontColor={COLORS.white}
    fontFamily={FONTS.content}
    hamburgerBackground={COLORS.white}
    hoverColor={COLORS.red}
    mainMenuBarBorderBottom={`1px solid ${COLORS.yellow}`}
    mainMenuBarBoxShadow={`2px 2px 6px ${COLORS.darkGray}`}
    mainMenuBarImgSource={`/images/beantown.svg`}
    navBarLogoImgStyles={IMG_STYLES}
    pages={PAGES}
    slideMenu={slideMenu}
    slideMenuBackgroundColor={COLORS.topMenuBackground}
    slideMenuLogoImgSource={`/images/script_logo.png`}
  />
)

if (app) {
  app.render(
    <ReactRoutes/>
  )
}

footer.render(
  <Footer/>
)

