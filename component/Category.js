import styled from "styled-components";
import Card3 from "./Card3";

const Sidebar = styled.div`
  text-align: center;
  background: #f2f5e2;
  width: 700px;
  height: 995px;
  padding: 30px;
  font-size: 35px;
`;

const Gambar2 = styled.img`
  width: 500px;
`;
const Gambar3 = styled.img`
  width: 500px;
`;
const Text4 = styled.a`

`

export default function Category() {
  return (
    <>
      <Card3 />
      <Sidebar>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <p>CATEGORY</p>
        <Gambar2 src="line 6.png" />
        <br/>
        <Text4>
        <p>1SETALATMAKAN <i class="fa fa-check-square-o" aria-hidden="true"></i> </p>
        </Text4>
        <br/>
        <p>Gelas</p>
        <p>Botol</p>
        <p>Pouch</p>
        <p>Tas kecil</p>
        <p>Snack</p>
        <Gambar3 src="line 6.png" />
      </Sidebar>
    </>
  );
}
