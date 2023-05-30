import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { styled } from 'styled-components'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
${mobile({padding:'10px'})};


`
const Title = styled.h1`
font-weight: 300;
text-align:center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${(props)=>props.type === 'filled' && 'none'};
    background-color:${(props)=>props.type === 'filled' ? 'black' : 'transparent'};
    color:${(props)=>props.type === 'filled' && 'white'}


`

const TopTexts = styled.div`
${mobile({display:'none'})};

`
const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:'column'})};

`
const Info = styled.div`
flex:3;
${mobile({flexDirection:'column'})};

`

const Product = styled.div`
display: flex;
${mobile({flexDirection:'column'})};

justify-content: space-between;
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`
const Image = styled.img`
width: 200px;
`

 const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction:column;
 justify-content: space-around;
 `
 const ProductName = styled.span``
const ProductId = styled.span``
const PriceDetail = styled.span`
flex:1;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
/* const ProductColor = styled.div`
width: 200px;
height: 200px;
border-radius:50%;
background-color:${(props)=>props.color};
` */

const ProductSize = styled.span`

`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:'5px 10px'})};

`

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom:'20px'})};

`
const Hr = styled.hr`
background-color:#eee;
    border:none;
    height: 2px;
`
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding: 10px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
font-weight: ${props=>props.type === 'total' && '500'};
font-size: ${props=>props.type === 'total' && '24px'};

`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
`
const SummaryItemText = styled.span``


const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
width: 100%;
padding: 10px;
background-color:black;
color:white;
font-weight: 600;
`






const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        Cart
        <Wrapper>
            <Title>
                YOUR DRUGS
            </Title>
            <Top>
                <TopButton>PLEASE CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Whishlist(0)</TopText>

                    </TopTexts>
                <TopButton type='filled'>PLEASE CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
            <Info>
            <Product>
            <ProductDetail> 
            <Image src='https://www.anunustores.com/user/products/large/Neoskin%20Cream.jpg'/>
            <Details>
            <ProductName><b>Product:</b> NEOSKIN</ProductName>
            <ProductId><b>ID:</b> 930446789</ProductId>
            
            <ProductSize><b>Size:</b> 34.5</ProductSize>
            </Details>
            </ProductDetail>
            <PriceDetail>
            <ProductAmountContainer>
            <Add/>
            <ProductAmount>2</ProductAmount>
            <Remove/>
            </ProductAmountContainer>
            <ProductPrice>800frs</ProductPrice>
            </PriceDetail>
            </Product>
            <Hr/>
            <Product>
            <ProductDetail> 
            <Image src='https://www.anunustores.com/user/products/large/Neoskin%20Cream.jpg'/>
            <Details>
            <ProductName><b>Product:</b> NEOSKIN</ProductName>
            <ProductId><b>ID:</b> 930446789</ProductId>
    
            <ProductSize><b>Size:</b> 34.5</ProductSize>
            </Details>
            </ProductDetail>
            <PriceDetail>
            <ProductAmountContainer>
            <Add/>
            <ProductAmount>2</ProductAmount>
            <Remove/>
            </ProductAmountContainer>
            <ProductPrice>800frs</ProductPrice>
            </PriceDetail>
            </Product>            
            </Info>

            <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>

            <SummaryItem>
            <SummaryItemText>SubTotal</SummaryItemText>
            <SummaryItemPrice>2000frs</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>500frs</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>-100frs</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem  type='total'>
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>2400frs</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>PLEASE CHECK OUT NOW</SummaryButton>
            </Summary>




            
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart