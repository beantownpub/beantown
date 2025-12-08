import React from "react"
//import { GrubHub } from "./grubHub/main.js"
import { GrubHubLink } from "./grubHub/index.js"
import { HeroHeader } from "./heroHeader/main.js"
import { config } from "../../utils/main.js"
// import { sendEvent } from "../kafka/index.js"
import { ContentContainer, PageContainer } from "../containers/index.js"
// import { ImageSlider } from "../imageSliders/main.js"
const COLORS = config.colors
const FONTS = config.fonts
const STATIC_PATH = `${config.urls.static}/img/merch`
const SLIDER_STYLES = {
  buttonColor: COLORS.yellow,
  margin: "unset",
  img: {
    borderRadius: "6px"
  }
}

const SLIDER_SETTINGS = {
  dots: false,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 8500,
  pauseOnHover: false,
  swipeToSlide: true,
  fade: true,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

const SLIDER_IMAGES = [
  "new_sam_adams_shirt_back_small.png",
  "scripted_one_side_shirt_small.png",
  "old_sam_adams_shirt_back.png"
]

export const MainInfo = () => {
  // window.addEventListener("click", (event) => {
  //   sendEvent(event)
  // })
  return (
    <PageContainer>
      <HeroHeader 
        image="granary_heroheader.jpeg"
        margin="5rem 0 0 0"
      >The only pub in the world where you can drink a cold Sam Adams&apos; while viewing a cold Sam Adams</HeroHeader>
        <ContentContainer
          ariaDetails="BusinessHours"
          aColor={COLORS.red}
          aHoverColor={COLORS.dodgerBlue}
          backgroundColor={COLORS.yellow}
          h1FontFamily={FONTS.button}
          h1LetterSpacing=".25rem"
          h1TextAlign="left"
          h2FontFamily={FONTS.headline}
          h2FontWeight="900"
          h2LetterSpacing=".25rem"
          h2Margin="0"
          h2Padding=".5rem 0"
          h2TextAlign="left"
          h2TextTransform="uppercase"
          h3Color={COLORS.red}
          h3Margin="0"
          h3TextAlign="left"
          h5FontFamily={FONTS.script}
          h5TextAlign="left"
          h5TextTransform="none"
          h5Color={COLORS.black}
          margin="1%"
        >
          <section id="hoursSection">
            <h1>Billiards, Cocktails, Beer, And Fine Pub Dining</h1>
            <h5>Serving the heart of historic downtown Boston</h5>
            <h2>Open Daily</h2>
            <h3>9:00 AM to 2:00 AM</h3>
            <h2>Serving Food Late Night</h2>
            <h2><a href='/menu'>See menu &#10148;</a></h2>
            <h2>Looking for takeout?</h2>
            {/*<GrubHub/>*/}
            <GrubHubLink/>
          </section>
        </ContentContainer>
        <ContentContainer
          ariaDetails="GiftCardsMerch"
          aColor={COLORS.dodgerBlue}
          aHoverColor={COLORS.red}
          backgroundColor={COLORS.darkGray}
          h2TextAlign="left"
          h3Color={COLORS.yellow}
          h3TextAlign="left"
          h4Color={COLORS.yellow}
          h4FontSize="2rem"
          h4TextAlign="left"
          margin="1% 0"
        >
          <section id="giftCardsMerchSection">
            <h3>Gift Cards and Merchandise Available<br /></h3>
            {/* <ImageSlider images={SLIDER_IMAGES} imagePath={STATIC_PATH} sliderSettings={SLIDER_SETTINGS} sliderStyles={SLIDER_STYLES} /> */}
            <h4><a id="merchRef" href='/merch/items'></a></h4>
            <h4>Make your next private event a memorable one and book it at Beantown<br /><a id="partiesRef" href='/parties'>Learn more &#10148;</a></h4>
          </section>
        </ContentContainer>
        <ContentContainer
          ariaDetails="InfoSection"
          aColor={COLORS.red}
          aHoverColor={COLORS.dodgerBlue} 
          backgroundColor={COLORS.yellow}
          h2Margin="0"
          h2TextAlign="left"
          h3Color={COLORS.black}
          h3Margin="0"
          h3TextAlign="left"
          margin="2% 0"
        >
          <section id="faqSection">
            <h3>Want more info?<br /></h3>
            <h2>See our frequently asked questions</h2>
            <h2><a id="aboutRef" href='/about'><span>FAQ &#10148;</span></a></h2>
          </section>
        </ContentContainer>
    </PageContainer>
  )
}

export const ErrorPage = () => {
  return (
    <PageContainer aria-labelledby="Content container">
      <ContentContainer bgColor={COLORS.yellow}>
        <section>
          <h1>See Yah Laatah&trade;!</h1>
          <h2>Sorry, somethin' aint right</h2>
          <h2>Requested page is nowhere to be found on the server</h2>
        </section>
      </ContentContainer>
    </PageContainer>
  )
}
