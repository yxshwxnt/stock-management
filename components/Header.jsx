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
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Add Product</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color={"primary"} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  );
};

export default Header;
