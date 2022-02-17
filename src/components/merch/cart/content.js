import React from "react"
import { StyledContentContainer } from "./styles"

export const OrderConfirmation = (props) => {
    return (
        <StyledContentContainer aria-labelledby="Order confirmation"  h1Color={props.h1Color}>
            <h1>Order Complete</h1>
            <p>Thank you for shopping with Beantown Pub!</p>
            <p>Your order confirmation has been emailed to</p>
            <p>{props.email}</p>
            <p><strong>Order ID:</strong></p>
            <p>{props.confirmationCode}</p>
        </StyledContentContainer>
    )
}

export const OrderFailed = (props) => {
    return (
        <StyledContentContainer aria-labelledby="Order failed" h1Color={props.h1Color}>
            <h1>Order Failed</h1>
            <p>We're sorry but there was an issue processing your payment</p>
            <p>You have not been charged</p>
            <p>Refresh page to try again or later or contact us at</p>
            <p>{props.email}</p>
        </StyledContentContainer>
    )
}

export const ShippingInfo = (props) => {
    return (
        <StyledContentContainer aria-labelledby="Shipping info" margin=".5rem auto" padding="1rem">
            <h2>Shipping Info</h2>
            <p>Currently we can only ship domestically in the U.S<br />
            All orders are standard shipping and cost {props.shippingPrice}</p>
        </StyledContentContainer>
    )
}
