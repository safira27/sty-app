import styled from "styled-components";

const Body = styled.div`
  background: #f2f5e2;
  padding: 10hvh;

`;
const Header = styled.div`
  background: #785d44;
  text-align: center;
  padding: 30hvh;

`;

const Part = styled.div`
  float: left;
  font-size: 16px;
  width: 33%;
  background: #785d44;
  padding: 30px 80px;
`;

const Gambar2 = styled.img`
  width: 200px;
  padding: 9px 9px;
`;
const Part2 = styled.a`
  float: left;
  width: 34%;
  font-size: 35px;
  height: 145px;
  background: #785d44;
  padding: 50px;

`;
const Text4 = styled.a`
  color: white;
  font-size:19px ;
  text-align: center;
  padding: 25px 30px;
  text-decoration: none;
`;

export default function Footer() {
  return (
    <>
      <Body>
        <Header>
          <Part>
            <Gambar2 src="log.png" />
          </Part>
          <Part>
            <Text4>
             
              <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </Text4>
            <Text4>
            
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </Text4>
            <Text4>
              
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </Text4>
            <Text4>
             
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </Text4>
            <Text4>
            <p>Email : souvenirkekinian@gmail.com</p>
            <p>+62876-9832-6421</p>

            </Text4>
          </Part>

          <Part2>
            <Text4>Home</Text4>
            <Text4>Produk</Text4>
            <Text4>Kategori</Text4>
            <Text4>Chat</Text4>
          </Part2>
        </Header>
      </Body>
    </>
  );
}
