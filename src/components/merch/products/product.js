import React, { useState } from 'react'
import { CartButton } from '../../elements/buttons/main'
import { StyledMerchItem } from './styles'
import { config } from '../../../utils/main'
import { SizeSelect } from './sizeSelect'

const COLORS = config.colors

export const ProductCard = (props) => {
  const staticPath = `${config.urls.static}/img/merch/`
  const [size, setSize] = useState({ size: 'medium' })
  const [quantity, setQuantity] = useState({ quantity: 1 })

  function handleSizeChange(event) {
    console.log('Handling size change')
    console.log(event.target.value)
    setSize({ size: event.target.value })
  }

  function handleQuantityChange(event) {
    setQuantity({ quantity: event.target.value })
  }

  return (
    <StyledMerchItem aria-labelledby="Merch item container">
      <table>
        <tbody>
          <tr>
            <td className="itemName">{props.name}</td>
            <td className="itemPrice">{props.price}</td>
          </tr>
        </tbody>
      </table>
      <img src={`${staticPath}${props.imgName}`} alt={props.name} />
      <p>{props.description}</p>
      <div className='size'>
          {props.sizes == true &&
              <SizeSelect
                  onSizeChange={handleSizeChange}
                  inventory={props.inventory}
                  size={size.size}
              />}
      </div>
      <div className='qty'>
        <label>Qty:</label>
        <input
          name='quantity'
          value={quantity.quantity}
          onChange={handleQuantityChange}
          placeholder='1'
          size='2'
        />
      </div>
      <CartButton
        runFunction={props.cartUpdate}
        buttonText='Add To Cart'
        action='POST'
        size={size.size}
        quantity={quantity.quantity}
        sku={props.sku}
        noSize={props.sizes}
        bgColor={COLORS.yellow}
        border={`1px solid ${COLORS.lightGray}`}
        hoverBorder={`1px solid ${COLORS.yellow}`}
        hoverBackgroundColor={COLORS.black}
        hoverTextColor={COLORS.yellow}
        outerMargin='auto'
        textColor={COLORS.black}
      />
    </StyledMerchItem>
  )
}
