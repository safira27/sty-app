import styled from 'styled-components';
const Hero = styled.div`
  display: flex;
  background: #F2F5E2;
  padding: 20px;

`;

const Heading = styled.h1`
  color: #785D44;
  margin: 50px;
  padding: 10px;
  grid: 400px / auto auto;
`;


const StyledLink = styled.a`
  padding: 0rem 60rem;
  margin:10px;
  padding:30px;
  display: grid;
  margin-left:50rem;

`;
const Gambar = styled.img`
  width: 20px
  grid: 0;
  


`;
const Button = styled.div`
background: #699B80;
  color: white;
  width: 150px;
  height: 50px;
  font-size:20px;
  margin:15px;
  padding:13px;
  border-radius: 25px;
  text-align:center;




`;
const Text= styled.h1`
text-align:center;
background: #F2F5E2;
font-size:50px;
padding:13px;



`
export default function Diskon() {
    return(
      <>
      <Hero>
        
        <Heading>
        <h1>DISKON 30%</h1>
        <p>Spesial khusus kamu pengguna baru. Masukkan kode dibawah <br/> ini saat pembayaran</p>
        <Button >REALLY123</Button>


        </Heading>
        
        <StyledLink>
          <Gambar src='log2.png'/>
        </StyledLink> 

      </Hero>
      <Text> Collection Spotlight</Text>
      <hr/>

      
      
      </>


    )
}
