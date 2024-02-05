import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { useState } from 'react';


export const Header = ({ categories, products, categoriem, setCategoriem }) => {
  // console.log(products, categories)
  const ALL = "all"
  const MAN = "men's clothing"
  const WOMAN = "women's clothing"
  const ELCTR = "electronics"
  const JEW = "jewelery"

  const handleClick = (item) => {
    console.log(item)
    if (item === ALL) {
      setCategoriem(products)
      console.log(categoriem)
    } else if (item === MAN) {
      const filteredCategory = products.filter(item => item.category === MAN)
      console.log(filteredCategory)
      setCategoriem(filteredCategory)
      console.log(categoriem)
    } else if (item === WOMAN) {
      const filteredCategory = products.filter(item => item.category === WOMAN)
      console.log(filteredCategory)
      setCategoriem(filteredCategory)
      console.log(categoriem)
    } else if (item === ELCTR) {
      const filteredCategory = products.filter(item => item.category === ELCTR)
      console.log(filteredCategory)
      setCategoriem(filteredCategory)
      console.log(categoriem)
    } else {
      const filteredCategory = products.filter(item => item.category === JEW)
      console.log(filteredCategory)
      setCategoriem(filteredCategory)
      console.log(categoriem)
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
