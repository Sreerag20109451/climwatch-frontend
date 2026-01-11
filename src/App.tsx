import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import ProductsPage from "./pages/products";
import SnowPage from "@/pages/snowvisualisation";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<ProductsPage />} path="/products" />
      <Route element={<SnowPage />} path="/products/snow-vis" />
    </Routes>
  );
}

export default App;
