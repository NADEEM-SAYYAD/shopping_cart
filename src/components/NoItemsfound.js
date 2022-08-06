import { Card } from "react-bootstrap";
const NoItemsfound = () =>{
    const brokenImage = "https://image.shutterstock.com/image-vector/no-item-found-vector-filled-260nw-2087433073.jpg";
    return(
        <div className="products">
        <Card>
          <Card.Img variant="top" src={brokenImage} alt="No Items Found" />
          <Card.Body>
            <Card.Title>No Items found by entered words</Card.Title>
          </Card.Body>
        </Card>
      </div>
    )
}
export default NoItemsfound