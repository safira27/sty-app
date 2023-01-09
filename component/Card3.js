import styled from "styled-components";

const Waddah = styled.div`
  display: flex;
  justify-items: stretch;
  width: 45%;
  padding:15px 10px;
  height: 43rem;


`;

const Wadah2 = styled.div`
  display: flex;
  width: 90px;
  align-items: left;
`;

const Wadah5 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  text-align: center;
`;
const Gambar2 = styled.img`
  width: 210px;
`;
const Wadah6 = styled.div`
  box-sizing: border-box;
  box-shadow: 5px 2px black;
  background: #f2f3e7;
  font-size: 26px;
padding:5px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
const Button = styled.div`
  border-radius: 25px;
  font-size: 20px;
  color: black;
  width: 200px;
  padding: 9px;
  margin: 9px 100px;
  background: #dbad34;
`;
const StyledUl = styled.ul`
color: #785D44;
font-size: 16px;
cursor: pointer;
padding:10px;
text-align: center;
`;

const StyledLi = styled.li`
  position: relative;
  display: inline-block;
  padding-right:40px 20px;
  &:hover {
    width: 200px;
    border-color: #785d44;


  }
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 90px;
  overflow: auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
color: #785D44;
border: solid;
padding:9px 0 0 1px;
  text-decoration: none;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 30px;
  text-decoration: none;
`;

const SubA = styled(StyledA)`
  text-decoration: none;
  text-align: rigth;
  padding:9px 30px;
`;
const Justify = styled.p`
color: #785D44;
  margin-right: 790px;
  font-size: 20px;
  text-align: right;
`;
const Post = styled.div`
  text-align: center;
  height: 10%;
  width: 45%;
  float: right;
`;

export default function Card3() {
  return (
    <>
      <Post>
        <StyledUl>
          <DropDownLi>
            <StyledA onClick={() => this.handleClick("DropDown")}>
              DROPDOWN
            </StyledA>
            <DropDownContent>
              <SubA onClick={() => this.handleClick("Link1")}>Home</SubA>
              <SubA onClick={() => this.handleClick("Link2")}>Produk</SubA>
              <SubA onClick={() => this.handleClick("Link3")}>Kategori</SubA>
            </DropDownContent>
          </DropDownLi>
        </StyledUl>
        <Justify>
          <p>50 PRODUCK</p>
        </Justify>
        <Waddah>
          <Wadah2>
            <Wadah5>
              <Wadah6>
                <Gambar2 src="sendok1.jpg" />
                <p>Sendok Kekinian </p>

                <Button>REALLY123</Button>
              </Wadah6>
              <Wadah6>
                <Gambar2 src="sendok2.jpg" />
                <p>Sendok Kekinian </p>

                <Button>REALLY123</Button>
              </Wadah6>
              <Wadah6>
                <Gambar2 src="sendok3.jpg" />
                <p>Pouch kekinian </p>

                <Button>REALLY123</Button>
              </Wadah6>
              <Wadah6>
                <Gambar2 src="sendok4.jpg" />
                <p>1 Set sendok</p>

                <Button>REALLY123</Button>
              </Wadah6>
            </Wadah5>
          </Wadah2>
        </Waddah>
      </Post>
      
    </>
  );
}
