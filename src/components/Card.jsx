import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addBtnStat } from "../redux/store/slices/items-slice";

const CustomCard = ({ operation, value, ...props }) => {
  const { data } = props;
  const [checkStat, setStat] = useState(true);
  const [stat, setStatO] = useState([]);
  const dispatch = useDispatch();
  const btnStatus = useSelector((state) => state.itemsStat.setBtnStat[0]);
  useEffect(() => {
    const statO = btnStatus.filter((item) => item.id === data.id);
    setStatO(statO[0]);
    // setStat(stat[0]?.btnStat);
  }, [btnStatus, data.id]);
  const handleCheckStat = (status) => {
    setStat(!checkStat);
    const newStatus = {
      id: status.id,
      btnStat: !checkStat,
    };
    const updatebtnStatus = btnStatus.filter((item) => item.id !== status.id);
    updatebtnStatus.push(newStatus);
    dispatch(addBtnStat(updatebtnStatus));
  };
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.thumbnail} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Text>Price: {data.price}$</Card.Text>
          <Card.Text>Rating: {data.rating}</Card.Text>
          <Card.Text>Avaibale: {data.stock}</Card.Text>
          <Button
            id={data.id}
            onClick={(event) => {
              handleCheckStat(stat);
              operation(event);
            }}
            variant="primary"
          >
            {checkStat ? "Add to Cart" : "Remove from cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
