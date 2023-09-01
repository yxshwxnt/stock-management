import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";
import InventoryTable from "@/components/InventoryTable";
import { Text, Button, Input, Dropdown } from "@nextui-org/react";

const Home = () => {
  const [productForm, setProductForm] = useState({
    item: "",
    qty: 0,
    price: 0,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("/api/product/route");
    const rjson = await response.data;
    setProducts(rjson);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`/api/product/route?itemId=${itemId}`);
      alert("Item deleted successfully");
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== itemId)
      );
    } catch (error) {
      console.log("Error Deleting item", error);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/product/route", productForm, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        alert("Your Product has been added!");
        setProductForm({});
        fetchProducts();
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleQuantityChange = async (itemId, columnKey, newValue) => {
    try {
      console.log("here");
      await axios.put(`/api/product/route/${itemId}`, {
        [columnKey]: Number(newValue),
      });
    } catch (error) {
      console.error("Error updating quantity or price:", error);
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
          <form onSubmit={addProduct}>
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
                value={Number(productForm?.qty) || ""}
                name="qty"
                id="quantity"
                onChange={handleChange}
              />
              <Input
                required
                placeholder="Price"
                label="Price"
                type="number"
                value={Number(productForm?.price) || ""}
                name="price"
                id="price"
                onChange={handleChange}
              />
            </div>
            <Button type="submit" ghost color={"primary"}>
              Add Product
            </Button>
          </form>
        </div>
        <div className="container my-12 flex flex-col gap-3">
          <Text size={50} weight="bold">
            Inventory
          </Text>
          <InventoryTable
            products={products}
            handleDelete={handleDelete}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
