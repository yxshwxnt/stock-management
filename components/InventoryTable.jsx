import React from "react";
import { Table, Grid } from "@nextui-org/react";

export default function App({ products }) {
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  const columns = [
    {
      key: "item",
      label: "Item Name",
    },
    {
      key: "qty",
      label: "Quantity",
    },
    {
      key: "price",
      label: "Price",
    },
  ];
  const rows = products;
  console.log(rows);
  return (
    <Grid.Container>
      <Grid xs={8}>
        <Table
          aria-label="Example dynamic collection table with color selection"
          color={"primary"}
          selectionMode="multiple"
          containerCss={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item) => (
              <Table.Row key={item._id}>
                {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Grid>
    </Grid.Container>
  );
}
