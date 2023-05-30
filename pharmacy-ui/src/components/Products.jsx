
import React from 'react'
import { styled } from 'styled-components'
import { PopularProducts } from '../data'
import Product from './Product'



const Container = styled.div`
 padding:20px;
 display:flex;
 flex-wrap:wrap;
justify-content:space-between; 
`

const Products = () => {
  return (
    <Container>
      {PopularProducts.map((item)=>(
        <Product item={item} key={item.id}/>
      ))}
    
      
    </Container>
  )
}

export default Products







// import React from 'react';
// import styled from 'styled-components';
// import {popularProducts} from '../data'; 
// import Product from './Product'
    

// const Container = styled.div`
// padding:20px;
// display:flex;
// flex-wrap:wrap;
// justify-content:space-between; 


// `//use filter here
// const Products = () => {
//   return (
//     <Container>
//       {popularProducts.map(item=> (
//         <Product item={item} key={item.id}/>
//       ))}
//     </Container>
//   )
// }

// export default Products
