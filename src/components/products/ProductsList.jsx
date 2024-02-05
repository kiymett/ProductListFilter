import { Container, Form, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
// import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from 'react'

const ProductsList = ({ products, categoriem, setCategoriem }) => {
  console.log(categoriem)
  console.log(products)


  const [take, setTake] = useState("")
  //console.log(take)
  const handleChange = (e) => {
    setTake(e.target.value)
    console.log(setTake)
  }
  //const filteredData = products.filter((item) => item.title.toLowerCase().includes(take.toLowerCase().trim()))
  const filteredData = categoriem.filter((item) => item.title.toLowerCase().includes(take.toLowerCase().trim()))
  return (
    <>
      {/* <Header /> */}
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handleChange}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {filteredData.map((take, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <ProductCard {...take} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
