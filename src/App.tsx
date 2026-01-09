import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import ProductsPage from "./pages/products";
import SnowPage from "@/pages/snowpage";


function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<SnowPage />} path="/snow" />
      <Route element={<ProductsPage />} path="/products" />
    </Routes>
  );
}

export default App;
