import React from "react";
import { Button, Container, NavItem, Stack } from "react-bootstrap";
// import { products, categories } from "../../helper/data";
import "./Header.scss";
import { useState } from 'react'


export const Header = ({ categories, products }) => {
  // console.log(products, categories)
  const [categoriem, setCategoriem] = useState([])
  const ALL = "all"
  const MAN = "men's clothing"
  const WOMAN = "women's clothing"
  const ELCTR = "electronics"
  const JEW = "jewelery"

  const handleClick = (item) => {
    console.log('click')
    console.log(item)
    if (item === ALL) {
      setCategoriem(products)
      return categoriem
    } else if (item === MAN) {
      const filteredCategoryMan = products.filter(item => item.category === MAN)
      console.log(filteredCategoryMan)
      setCategoriem(filteredCategoryMan)
      console.log(categoriem)
    } else if (item === WOMAN) {
      const filteredCategoryWoman = products.filter(item => item.category === WOMAN)
      console.log(filteredCategoryWoman)
      setCategoriem(filteredCategoryWoman)
      console.log(categoriem)
    } else if (item === ELCTR) {
      const filteredCategoryElctr = products.filter(item => item.category === ELCTR)
      console.log(filteredCategoryElctr)
      setCategoriem(filteredCategoryElctr)
      console.log(categoriem)
    } else {
      const filteredCategoryJew = products.filter(item => item.category === JEW)
      console.log(filteredCategoryJew)
      setCategoriem(filteredCategoryJew)
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
