import { Route, Routes, Outlet } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import IndexPage from "@/pages/index";
import ProductsPage from "./pages/products";
import SnowPage from "@/pages/snowvisualisation";
import AboutMePage from "@/pages/about";
import RoadmapPage from "@/pages/roadmap";

function ProductsLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function App() {

  const queryClient = new QueryClient()
  return (

    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutMePage />} path="/about" />
      <Route element={<RoadmapPage />} path="/products/land-vis" />
      
      <Route path="/products" element={<ProductsLayout />}>
        <Route index element={<ProductsPage />} />
        <Route path="snow-vis" element={<SnowPage />} />
         <Route path="land-vis" element={<SnowPage />} />
        
      </Route>
    </Routes>
    </QueryClientProvider>
  );
}

export default App;