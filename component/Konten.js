import styled from 'styled-components';


const Waddah = styled.div`
display: flex;
padding:20px;
  justify-content: center;
  padding-left:0;
  align-items: center;
  background: #F2F5E2;



`



const Wadah2 = styled.div`
display: flex;
height: 100%;
width: 900px;
align-items: center;
`

const Wadah4 = styled.div`
display: flex;
justify-content: right;

`
const Wadah5 = styled.div`
display: grid;
grid-template-columns: repeat(8,1fr);
grid-gap: 40px;
text-align: center;
`
const Gambar2 = styled.img`
width: 300px;
`
const Wadah6 = styled.div`
box-sizing: border-box;
box-shadow: 5px 2px black;
background:#F2F3E7;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
border-top-left-radius: 30px;
border-top-right-radius: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 30px;




`;
const Button = styled.div`
   border-radius:25px;
    font-size: 25px;
    color:white;
    width:110px;
    padding: 8px;
    margin:10px 100px;
    background: #DBAD34; 


`


export default function Card() {
    return(
    <>
        <Waddah>
      <Wadah2>
          <Wadah4>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <Wadah5>
                <Wadah6>
                    <Gambar2 src='gelas2.jpg'/>

                    <Button>Gelas Kekinian<i class="fa fa-arrow-right" aria-hidden="true"></i></Button>

                </Wadah6>
                <Wadah6>
                    <Gambar2 src='cookies.jpg'/>

                    <Button>Cokies<i class="fa fa-arrow-right" aria-hidden="true"></i></Button>

                </Wadah6>
                <Wadah6>

                    <Gambar2 src='sendok.jpg'/>

                    <Button>Sendok & Garpu<i class="fa fa-arrow-right" aria-hidden="true"></i></Button>

                </Wadah6>

             
            </Wadah5>

          </Wadah4>

      </Wadah2>
      </Waddah>
    
    </>
    )
}