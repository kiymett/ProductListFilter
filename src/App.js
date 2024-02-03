import ProductList from "./components/products/ProductsList";
import { Header } from "./components/header/Header"
import { products, categories } from './helper/data'

import "./App.scss";

function App() {
  return (
    <div>
      <Header categories={categories} products={products} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
