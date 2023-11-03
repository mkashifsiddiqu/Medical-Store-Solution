// * Imported Libraries
import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// * Imported Components (Files)
import Rating from './Rating.component'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded product_card_style'>
      {/* Card Image (Product Image) */}
      <Link to={`/product/${product._id}`}>
        <Image
          src={product.image}
          alt={product.name}
          variant='top'
          fluid
          style={{ maxHeight: '420px', padding: '20px', width: '100%' }}
        />
      </Link>

      <Card.Body>
        {/* Card Title (Name of the Product) */}
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title as='div'>
            <strong className='product_card_strong'>{product.name}</strong>
          </Card.Title>
        </Link>
        {/* Card Text  */}
        {/* Reviews */}
        <Card.Text as='div' style={{ color: 'white' }}>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        {/*  product price */}
        <Card.Text as='h3' style={{ color: 'white', fontSize: '1.6rem' }}>
          PKRS {product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
