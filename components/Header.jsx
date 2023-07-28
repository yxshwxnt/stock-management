import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Spacer,
  Radio,
  useTheme,
} from "@nextui-org/react";

const Header = () => {
  const { isDark } = "true";
  return (
    <div className="text">
      <Navbar isBordered={isDark} variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Stock Management System
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"primary"}>
          <Navbar.Link href="/">Features</Navbar.Link>
          <Navbar.Link isActive href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/">Add Product</Navbar.Link>
          <Navbar.Link href="/">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default Header;
