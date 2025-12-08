import React from "react"
import { ContentContainer } from "../containers/index.js"
import { ContactBeantown } from "../contact/index.js"
import { config } from "../../utils/main.js"
// import { sendEvent } from "../kafka/index.js"
const STATIC_PATH = "/images"
const COLORS = config.colors
const photoStyles = {
  padding: "1rem",
  display: "flex"
}

const galleryStyles = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  margin: "auto"
}

const imgStyles = {
  maxWidth: "250px",
  borderRadius: "6px"
}

const PhotoGallery = (props) => {
  const renderItems = (items) => {
    const galleryPhotos = []
    let cnt = 0
    for (const item of Object(items)) {
      galleryPhotos.push(
        <div style={photoStyles} key={cnt}><img style={imgStyles} src={`${STATIC_PATH}/${item}`}  alt={item} /></div>
      )
      cnt++
    }
    return (
      <div style={galleryStyles}>
        {galleryPhotos}
      </div>
    )
  }
  return (
    <ContentContainer margin="auto">
      {renderItems(props.images)}
    </ContentContainer>
  )
}

const images = [
  "bt_pool_tables.jpeg",
  "bt_private_event_pt2.jpeg",
  "bt_private_event_pt4.jpeg",
  "elisha_brown_room.jpeg",
  "elisha_brown_room2.jpeg"
]

export const PrivateParties = () => {
  return (
    <ContentContainer  
      articleMargin="1rem auto"
      margin="15% auto 1% auto"
    >
      <h1>Private Parties</h1>
      <article id="privatePartiesArticle">
      Make your next private event a memorable one. Beantown Pub offers a variety of spaces that are perfect for accomadating small gatherings
      or corporate events. Choose from spaces with single, multiple, or no pool tables. Our private event menu offers a variety of freshly
      prepared delicious appetizers all the way up to a full buffet with several entrees.
      </article>
      <ContentContainer 
        pColor={COLORS.white}
        maxWidth="900px"
        pMaxWidth="700px"
        backgroundColor={COLORS.backgroundGray}
        borderRadius="5px"
      >
        <p>For more information or to make a reservation, please contact us at <a href="mailto:BeantownPubBoston@gmail.com">BeantownPubBoston@gmail.com</a> or call us at <a href="tel:6174260111">617-426-0111</a>.</p>
      </ContentContainer>
      <PhotoGallery images={images} />
    </ContentContainer>
  )
}
