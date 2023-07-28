import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";
import InventoryTable from "@/components/InventoryTable";
import { Text, Button, Input, Dropdown } from "@nextui-org/react";

const Home = () => {
  const [productForm, setProductForm] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/product/route");
      const rjson = await response.data;
      setProducts(rjson);
    };
    fetchProducts();
  }, []);

  const addProduct = async (e) => {
    try {
      const response = await axios.post("/api/product/route", productForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        alert("Your Product has been added!");
        setProductForm({});
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    try {
      const response = await axios.get("/api/getProduct");
      setProducts(response.data);
    } catch (error) {
      console.error("Error retrieving products:", error);
    }
  };

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="container my-8 mx-28">
        <div className="main">
          <form>
            <Text size={40} weight="bold">
              Add a Product
            </Text>
            <div className="flex gap-1">
              <Input
                required
                placeholder="Enter a Product Name"
                size="lg"
                width="550px"
                type="text"
                value={productForm?.item || ""}
                name="item"
                id="productName"
                onChange={handleChange}
              />
              <Dropdown>
                <Dropdown.Button ghost size="lg">
                  All
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item key="category1">Category 1</Dropdown.Item>
                  <Dropdown.Item key="category2">Category 1</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="flex gap-2 mt-4 mb-4">
              <Input
                required
                placeholder="Qty"
                label="Quantity"
                type="number"
                value={productForm?.qty || ""}
                name="qty"
                id="quantity"
                onChange={handleChange}
              />
              <Input
                required
                placeholder="Price"
                label="Price"
                type="number"
                value={productForm?.price || ""}
                name="price"
                id="price"
                onChange={handleChange}
              />
            </div>
            <Button type="reset" ghost color={"primary"} onClick={addProduct}>
              Add Product
            </Button>
          </form>
        </div>
        <div className="container my-12 flex flex-col gap-3">
          <Text size={50} weight="bold">
            Inventory
          </Text>
          <InventoryTable products={products} />
        </div>
      </div>
    </>
  );
};

export default Home;
