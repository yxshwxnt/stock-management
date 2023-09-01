import React from "react";
import { useEffect, useState } from "react";
import { Table, Grid, Input } from "@nextui-org/react";
import { DeleteIcon } from "./icons/DeleteIcons";

export default function App({ products, handleDelete, handleQuantityChange }) {
  const [editedValues, setEditedValues] = useState({});
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const handleEdit = (itemId, columnKey, value) => {
    setEditedValues((prevEditedValues) => ({
      ...prevEditedValues,
      [itemId]: {
        ...prevEditedValues[itemId],
        [columnKey]: value,
      },
    }));
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
    {
      key: "action",
      label: "Action",
    },
  ];

  const rows = products;

  return (
    <Grid.Container>
      <Grid xs={8}>
        <Table
          aria-label="Example dynamic collection table with color selection"
          color={"primary"}
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
                {(columnKey) => (
                  <Table.Cell key={columnKey}>
                    {columnKey === "qty" || columnKey === "price" ? (
                      <Input
                        type="number"
                        value={
                          editedValues[item._id]?.[columnKey] !== undefined
                            ? editedValues[item._id][columnKey]
                            : item[columnKey]
                        }
                        onChange={(e) =>
                          handleEdit(item._id, columnKey, e.target.value)
                        }
                      />
                    ) : columnKey !== "action" ? (
                      item[columnKey]
                    ) : (
                      <DeleteIcon
                        size={20}
                        onClick={() => handleDelete(item._id)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Grid>
    </Grid.Container>
  );
}
