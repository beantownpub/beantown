import React, { useState, useEffect } from 'react'
import { StyledNoInventoryContainer, StyledDashContainer, StyledMerchNav } from './styles/main.js'
import { CategoryCards } from './products/index.js'
import { Cart } from './cart/index.js'
import { NumCartItems } from './cart/index.js'
import { getOptions } from '../../utils/main.js'
import { LinkButton } from '../elements/buttons/main.js'
import { config } from '../../utils/main.js'
import { sendEvent } from '../kafka/index.js'
const COLORS = config.colors

export const MerchDash = () => {
  window.addEventListener('click', (event) => {
    sendEvent(event)
  })
  const [state, setState] = useState({ categories: [] })
  const [cart, setCart] = useState({
    showCart: false,
    cartId: "",
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0.00
  })
  useEffect(() => {
    fetch('merchandise', getOptions)
      .then(response => response.json())
      .then(data => data.data)
      .then(data => setState({ categories: data }))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch('cart', {credentials: "include", headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => data.data)
      .then(data => setCart({ cartId: data.cart_id, cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
      .catch(error => console.log(error))
  }, [])

  function resetCart() {
    // console.log(`Cart reset: ${cart.cartId}`)
    const itemData = { id: cart.cartId }
    fetch('cart/empty', {method: "DELETE", credentials: "include", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(itemData)})
      .then(response => response.json())
      .then(data => data.data)
      .then(data => setCart({ cartId: data.cart_id, cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
      .catch(error => console.log(error, cart))
  }

  function updateCart(sku, quantity, size, action) {
    const itemData = {
      sku: sku,
      quantity: quantity,
      size: size
    }
    fetch('cart', {method: action, credentials: "include", body: JSON.stringify(itemData), headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(data => data.data)
      .then(data => setCart({ cartId: data.cart_id, cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
      .catch(error => console.log(error))
  }

  return (
    <div>
      {state.categories && state.categories.length > 0 ?
        <StyledDashContainer id="merchDash" aria-details="Merch Dash" margin="12rem auto 1rem auto">
          <Cart
            cartItems={cart.cartItems}
            total={cart.cartTotal}
            cartUpdate={updateCart}
            resetCart={resetCart}
            numCartItems={cart.numItemsInCart}
          />
          <StyledMerchNav id="merchNav" aria-details="Merch Nav">
            <NumCartItems total={cart.cartTotal}>{cart.numItemsInCart}</NumCartItems>
          </StyledMerchNav>
          <CategoryCards categories={state.categories} cartUpdate={updateCart} />
          <LinkButton url="/returns" buttonText="Return &amp; Refund Policy" textColor={COLORS.black} slug="returns" />
        </StyledDashContainer> :
        <StyledNoInventoryContainer aria-labelledby="No merchandise">
          <h1>Online merchandise coming soon! For now stop by the pub and purchase in person!</h1>
        </StyledNoInventoryContainer>
      }
    </div>
  )
}
