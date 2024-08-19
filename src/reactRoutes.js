import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { 
  AboutInfo,
  ContactInfo,
  ErrorPage,
  MainInfo,
  PrivateParties 
} from "./components/content/index.js"
import BeantownMenu from "./components/foodMenus/index.js"
import { MerchDash } from "./components/merch/index.js"
import { PrivacyPolicy, ReturnPolicy } from "./components/merch/content/index.js"

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainInfo/>} />
        <Route path="/index" element={<MainInfo/>} />
        <Route path="/about" element={<AboutInfo/>} />
        <Route path="/contact" element={<ContactInfo/>} />
        <Route path="/menu" element={<BeantownMenu/>} />
        <Route path="/merch/items" element={<MerchDash/>} />
        <Route path="/parties" element={<PrivateParties/>} />
        <Route path="/Private Parties" element={<PrivateParties/>} />
        <Route path="/returns" element={<ReturnPolicy/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
