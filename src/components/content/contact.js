import React from "react"
import { sendEvent } from "../kafka/index.js"
import { ContentContainer, PageContainer } from "../containers/index.js"
import { config } from "../../utils/main.js"
const COLORS = config.colors

export const ContactInfo = () => {
  // window.addEventListener("click", (event) => {
  //   sendEvent(event)
  // })
  return (
    <PageContainer>
      <ContentContainer
        ariaDetails="ContactInfoContainer" 
        backgroundColor="beige"
        borderRadius="5px"
        margin="15% auto"
        h1Padding="1rem 0"
        h2Margin="unset"
        h2TextAlign="left" 
        h3TextAlign="left"
        h3Margin="unset"
        h4Color={COLORS.black}
        h4FontSize="1.75rem"
        h6Color={COLORS.backgroundGray}
        maxWidth="500px"
      >
        <h1>Contact Beantown</h1>
        <h3>Call</h3>
        <h2>617-426-0111</h2>
        <h3>Mailing Address</h3>
        <h2>100 Tremont Street<br />Boston MA, 02108</h2>
        <h3>Email</h3>
        <h4>BeantownPubBoston@gmail.com</h4>
        <h6>Bosworth Place Inc. Beantown Pub DBA</h6>
      </ContentContainer>
    </PageContainer>
  )
}
