import Header from "@/components/Header";
import InventoryTable from "@/components/InventoryTable";
import {
  Text,
  Button,
  Pagination,
  Modal,
  useModal,
  Input,
  Table,
  Grid,
} from "@nextui-org/react";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-8 mx-28">
        <div>
          <div>
            <Text size={40} weight="bold">
              Search Products
            </Text>
            <Input
              placeholder="Enter a Product Name"
              size="xl"
              width="550px"
              type="search"
            />
            <div className="flex gap-2 mt-4 mb-4">
              <Input placeholder="Qty" label="Quantity" type="number" />
              <Input placeholder="Price" label="Price" type="number" />
            </div>
            <Button ghost color={"primary"}>
              Add Product
            </Button>
          </div>
        </div>
        <div className="container my-12 flex flex-col gap-3">
          <Text size={50} weight="bold">
            Inventory
          </Text>
          <InventoryTable />
        </div>
      </div>
    </>
  );
};

export default Home;
