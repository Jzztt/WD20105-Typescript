import { Route, Routes } from "react-router";
import Home from "./components/Home";
import CoreType from "./components/CoreType";
import ListProduct from "./components/ListProduct";
import FormCreateProduct from "./components/FormCreateProduct";
import ClientLayout from "./Layouts/ClientLayout";
import FormUpdateProduct from "./components/FormUpdateProduct";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/core-type" element={<CoreType />} />
          <Route path="/products" element={<ListProduct />} />
          <Route path="/product-create" element={<FormCreateProduct />} />
          <Route path="/update-product/:id" element={<FormUpdateProduct/>} />
        </Route>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
