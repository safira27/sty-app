import Head from 'next/head';
import styled from 'styled-components';


const Hero = styled.div`
display: flex;
background: #F2F5E2;

`

const Heading = styled.h1`
color: #785D44;
margin: 50px;
padding: 10px;
grid: 400px / auto auto;
`

const Button = styled.div`
background: #DBAD34; 
color: white;
width: 150px;
height: 50px;
font-size:20px;
margin:15px;
padding:13px;
border-radius: 25px;
text-align:center;




`
const StyledLink = styled.a`
padding: 0rem 60rem;
margin:10px;
padding:30px;
display: grid;
margin-left:50rem;

`
const Gambar = styled.img`
width: 30px
grid: 20px/ auto;



`
const Text= styled.h1`
text-align:center;
background: #F2F5E2;
font-size:50px;
padding:13px;



`



export default function Banner() {
return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Hero>
      
      <Heading>
      <h1>GET YOUR DREAM <br/>SOUVENIR HERE </h1>
      <p>Temukan souvenir impianmu untuk hari penting dengan <br/>banyak pilihan dan juga harga beragam</p>
      <Button class="button" >SHOP NOW</Button>

      </Heading>
      
      <StyledLink>
        <Gambar src='gambar.png'/>
      </StyledLink> 

    </Hero>
    <Text> Meet Our Best Seller</Text>
    <hr/>
    





    </>
    


    
);
}