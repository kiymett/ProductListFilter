import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";


export const Header = ({ categories, products, categoriem, setCategoriem }) => {
  const ALL = "all"
  const MAN = "men's clothing"
  const WOMAN = "women's clothing"
  const ELCTR = "electronics"
  const JEW = "jewelery"

  const handleClick = (item) => {
    if (item === ALL) {
      setCategoriem(products)
    } else if (item === MAN) {
      const filteredCategory = products.filter(item => item.category === MAN)
      setCategoriem(filteredCategory)
    } else if (item === WOMAN) {
      const filteredCategory = products.filter(item => item.category === WOMAN)
      setCategoriem(filteredCategory)
    } else if (item === ELCTR) {
      const filteredCategory = products.filter(item => item.category === ELCTR)
      setCategoriem(filteredCategory)
    } else {
      const filteredCategory = products.filter(item => item.category === JEW)
      setCategoriem(filteredCategory)
    }

  }

  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        <>
          {categories.map((item, i) => (
            <div className="btns" key={i}>
              <button onClick={() => handleClick(item)}>{item.toUpperCase()}</button>
            </div>
          ))}
        </>
      </Stack>
    </Container>
  );
};
