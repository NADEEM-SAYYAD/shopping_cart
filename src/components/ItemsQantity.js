import Form from 'react-bootstrap/Form';
import { useCartContext } from '../context/Cartcontext';


const ItemsQantity = ({ qty,pid }) => {
    const {
        cartDispatch: dispatch,
    } = useCartContext();
    const changeItemQtyHandler = (e,pid) => {
        dispatch({
            type: 'CHANGE_CART_QTY',
            payload: {
                qty : e.target.value,
                pid : pid
            }
        })
    }

    return (
        <Form.Control as="select" aria-label="Default select example" onChange={e=>changeItemQtyHandler(e,pid)}>
            {[...Array(qty).keys()].map((x) => (
                <option key={x + 1}>{x + 1}</option>
            ))}
        </Form.Control>
    )
}
export default ItemsQantity