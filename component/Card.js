import styled from 'styled-components';


const Waddah = styled.div`
display: flex;
padding:20px;
justify-content: center;
align-items: center;
margin: 0;
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
font-size: 26px;
padding:5px;
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
    font-size: 18px;
    color: black;
    width:100px;
    padding: 8px;
    margin:8px 100px;
    background: #DBAD34; 


`


export default function Card() {
    return(
    <>
        <Waddah>
      <Wadah2>
          <Wadah4>
            <Wadah5>
                <Wadah6>
                    <Gambar2 src='talenan.jpg'/>
                    <p>Mid-Century Modern Bundle </p>
                    <p>$100 </p>

                    <Button>Add to cart</Button>

                </Wadah6>
                <Wadah6>
                    <Gambar2 src='gelas.jpg'/>
                    <p>Mid-Century Modern Bundle</p>
                    <p>$200</p>

                    <Button>Add to cart</Button>

                </Wadah6>
                <Wadah6>
                    <Gambar2 src='macaron.jpg'/>
                    <p>Mid-Century Modern Bundle </p>
                    <p>$500 </p>

                    <Button>Add to cart</Button>

                </Wadah6>

             
            </Wadah5>

          </Wadah4>

      </Wadah2>
      </Waddah>
    
    </>
    )
}