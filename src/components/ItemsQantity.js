import Form from 'react-bootstrap/Form';

const ItemsQantity = ({ qantity }) => {
    console.log("HERE",qantity)
    return (
        <Form.Select aria-label="Default select example">
            <option>Select</option>
            {
                [...Array(qantity)].map(ind=>console.log("ind",ind+1))
            }
        </Form.Select>
    )
}
export default ItemsQantity