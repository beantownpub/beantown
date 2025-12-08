import React from "react"
import { config } from "../../utils/main.js"
// import { sendEvent } from "../kafka/index.js"
import { ContentContainer } from "../containers/index.js"
import { GrubHubLink } from "./grubHub/index.js"
const COLORS = config.colors


const FAQ = () => {
  return (
    <section id="faqSection">
      <h3>Frequently Asked Questions</h3>
      <h4>Do you accept credit cards yes?</h4>
      <p>Yes.</p>
      <h4>Do you take reservations?</h4>
      <p>No, but we do offer private parties for larger gatherings.</p>
      <h4>What time do you serve food &apos;til?</h4>
      <p>11:30, though subject to change based on demand.</p>
      <h4>Is the bar 21 plus?</h4>
      <p>No persons under 21 are allowed to sit at the bar at anytime but before 6:00 pm all ages are welcome to sit at any table in the restaurant. After 6:00 minors must be accompanied by an adult.</p>
      <p>You must be 21+ to play pool or be in the pool area</p>
      <h4>How many t.v.s do you have?</h4>
      <p>A lot! There are two large projection screens in the main pool area and many big screens scattered throughout the rest of the bar.</p>
      <h4>Can you put my game on?</h4>
      <p>Most likely, if it&apos;s available. Please keep in mind that we can only show three different games at any given time.</p>
      <h4>Do you have takeout?</h4>
      <p>Yes</p>
      <GrubHubLink/>
      <h4>How much does pool cost?</h4>
      <p>Pool tables are coin operated and are &#36;2.00 a game, there are change machines located in the pool area. Pool tables are first come first serve.</p>
      <h4>Can I have a job?</h4>
      <p>If you would like to apply for a job please come see us in person.</p>
    </section>
  )
}

export const AboutInfo = () => {
  // window.addEventListener("click", (event) => {
  //   sendEvent(event)
  // })
  return (
    <ContentContainer margin="5% auto 1% auto">
      <ContentContainer margin="5% auto 1% auto">
        <section>
          <h1>See Yah Laatah&trade;!</h1>
          <article id="aboutBeantownArticle">
            Nestled in the heart of downtown Boston and conveniently located on the famous Freedom Trail, Beantown is a classic American pub
            offering a casual drinking atmosphere and fine pub dining. Whether you&apos;re looking for an ice cold beer after work, a great place
            to meet friends, or somewhere to feel at home while you&apos;re traveling - Beantown Pub is the place to be!
          </article>
        </section>
      </ContentContainer>
      <ContentContainer
        backgroundColor="beige"
        borderRadius="5px"
        h4Color={COLORS.black}
        h4FontSize="1.5rem"
        h4FontWeight="900"
        margin="5% auto 1% auto"
      >
        <FAQ/>
      </ContentContainer>
    </ContentContainer>
  )
}
