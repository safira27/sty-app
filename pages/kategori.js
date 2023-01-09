import styled from "styled-components";
import Footer from "../component/Footer";
import Banner2 from "../component/Banner2";
import Category from "../component/category";
import Link from 'next/link'

const Header = styled.div`
  background: #f2f5e2;
`;
const Text = styled.ul`
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: inline;
`;
const Text2 = styled.li`
  list-style-type: none;
  padding: 50px 19px;
  font-size: 30px;
  float: right;
`;
const Text3 = styled.a`
  padding: 20px 20px;
  color: black;
  text-align: center;
  text-decoration: none;
`;
const Text4 = styled.a`
  color: black;
  text-align: center;
  text-decoration: none;
  padding: 14px 16px;
  &:hover {
    cursor: pointer;
    background: dimgrey;
  
`;

const Header2 = styled.img``;

const Gambar2 = styled.img`
  width: 180px;
  margin: 40px;
`;
const Gambar3 = styled.img`
  width: 50px;
`;

export default function Kategori() {
  return (
    <>
      <Header>
        <Gambar2 src="log.png" />

        <Text>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <Text2>
            <i class="cib-unreal-engine"></i>
            <Text3>
              <Link  href='/Home'
              >Home         
              </Link>
              <Text4>produk</Text4>
              <Text4 >Kategori</Text4>
              <Text4>Chat</Text4>
              <Text4>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </Text4>
              <Text4>
                <input type="text" placeholder="Search.." />
              </Text4>
              <Text4>
                <i class="fa fa-search" aria-hidden="true"></i>
              </Text4>
            </Text3>
            <Header2></Header2>
          </Text2>
        </Text>
      </Header>
      <Banner2 />
      <Category/>
      <Footer/>
    </>
  );
}
