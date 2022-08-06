import { Button, Form } from "react-bootstrap";
import { useCartContext } from "../context/Cartcontext";
import { convertStringBoolToBool } from "../utils/helpers"


const Filters = () => {
  const { productState: { price, stockStatus, deliveryStatus }, productDispatch } = useCartContext();
  const filterByAscDesc = (event) => {
    productDispatch({
      type: 'SORT_BY_PRICE',
      payload: convertStringBoolToBool(event.target.value)
    })
  }
  const handleInStock = (event) => {
    productDispatch({
      type: 'FILTER_BY_STOCK',
      payload: convertStringBoolToBool(event.target.checked)
    })
  }

  const handleDelieryStatus = (event) => {
    productDispatch({
      type: 'FILTER_BY_DELIVERY',
      payload: convertStringBoolToBool(event.target.checked)
    })
  }

  const handleClearAllFilters = () => {
    productDispatch({
      type: 'CLEAR_FILTERS',
    })
  }
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          value={true}
          onChange={filterByAscDesc}
          checked={price ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          value={false}
          onChange={filterByAscDesc}
          checked={!price ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={handleInStock}
          checked={stockStatus ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={handleDelieryStatus}
          checked={deliveryStatus ? true : false}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
      </span>
      <Button variant="light" onClick={handleClearAllFilters}>Clear Filters</Button>
    </div>
  );
};
export default Filters;