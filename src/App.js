import ProductList from "./components/products/ProductsList";
import { Header } from "./components/header/Header"
import { products, categories } from './helper/data'
import { useState } from 'react'
import "./App.scss";


function App() {
  const [categoriem, setCategoriem] = useState([])
  return (
    <div>
      <Header categories={categories} products={products} categoriem={categoriem} setCategoriem={setCategoriem} />
      <ProductList products={products} categoriem={categoriem} setCategoriem={setCategoriem} />
    </div>
  );
}

export default App;
