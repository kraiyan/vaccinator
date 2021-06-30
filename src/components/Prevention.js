import Sanitizer from "../images/sanitizer.jpg"
import Coughpic from "../images/coughpic.jpg"
import Mask from "../images/mask.jpg"
import Fever from "../images/fever.jpg"
import Cover from "../images/cover.jpg"
import { Card } from "react-bootstrap"
import Safe from "../images/safe.jpg"
import Main from "./main"

const Prevention = () => {
    return (

        <>
              
                <Main/>

            <div  style={{ marginLeft: "150px", display: "flex"}} className="row">
                <Card style={{  backgroundColor:"lightgreen",width: '18rem', marginRight : "20px", marginLeft: "50px" }}>
                    <Card.Img variant="top" src={Sanitizer} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <b> Clean your hands often. Use soap and water, or an alcohol-based hand rub.</b>
                        </Card.Text>

                    </Card.Body>
                </Card>





                <Card style={{ backgroundColor:"lightgreen", width: '18rem'  }}>
                    <Card.Img variant="top" src={Mask} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <b>Wear a mask when physical distancing is not possible.
                                Don’t touch your eyes, nose or mouth.</b>
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card style={{ backgroundColor:"lightgreen", marginLeft: "190px",width: '18rem' }}>
                    <Card.Img variant="top" src={Coughpic} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <b>Maintain a safe distance from anyone who is coughing or sneezing.</b>
                        </Card.Text>

                    </Card.Body>
                </Card>






            </div >
            <br /><br />

            <div  style={{ marginLeft: "150px", display: "flex"}}className="row">

                <Card style={{  backgroundColor:"lightgreen", width: '18rem', marginLeft: "50px" }}>
                    <Card.Img variant="top" src={Fever} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <b>If you have a fever, cough and difficulty breathing, seek medical attention.</b>
                        </Card.Text>

                    </Card.Body>
                </Card>


                <Card style={{ backgroundColor:"lightgreen", width: '18rem' }}>
                    <Card.Img variant="top" src={Cover} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <b>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</b>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ backgroundColor:"lightgreen", width: '18rem' }}>
                    <Card.Img variant="top" src={Safe} />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <b>
                                Stay home if you feel unwell.</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>








        </>
    )
}
export default Prevention;
