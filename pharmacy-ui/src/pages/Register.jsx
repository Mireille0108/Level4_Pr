
import React from 'react'
import { styled } from 'styled-components'
import {mobile} from '../responsive'


const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255, 0.5), rgba(255,255,255,0.5)), url("https://www.summahealth.org/-/media/project/summahealth/website/page-content/pharmacy/beyondprescriptions-1098323548.jpg?la=en&h=600&w=800&hash=FB569AD547858A1F45E02CFAC185DF2A")center;
background-size:color;
display: flex;
align-items:center;
justify-content: center;
`

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white;
${mobile({width:'75%'})};

`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding: 10px;


`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 50%;
border:none;
padding:  15px 20px;
background-color:teal;
color:white-space;
cursor: pointer;
margin-top:15px;
margin-left:32px;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
               PLEASE CREATE AN ACCOUNT
            </Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='user name'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>By creating an account,<b>PRIVATE POLICY</b> </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
