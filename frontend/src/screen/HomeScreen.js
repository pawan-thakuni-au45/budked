import React from 'react'
import { useEffect,useState } from 'react'

import {Row,Col} from 'react-bootstrap'

import Product from '../component/Product.js'
import { useGetProductsQuery } from '../slices/productApiSlices.js'


const HomeScreen = () => {
  //usegetproductquery gives us all these things
  const {data:products,isLoading,error}=useGetProductsQuery()
  console.log(products)

  
  return (

    <>
     {isLoading?(<h2>Loading...</h2>):error?(<div>{error?.data?.message || error.error}</div>):( 
    
      <Row>
      {
      products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}></Product>
          </Col>
  
      ))
      }
      </Row>
      )}
      
    </>
   
  )
}

export default HomeScreen