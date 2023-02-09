import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import Appbar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    <div style={{ marginBottom: "15rem" }}>
      <Card>
        <Appbar sx={{ color: "primary" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "flex-start" }}>
            <MenuIcon className="nav-items"></MenuIcon>

            <Button
              className="nav-items"
              variant="text"
              sx={{ color: "white" }}
            >
              <Link className="nav-links" href="/view">
                Dashboard
              </Link>
            </Button>
            <Button
              className="nav-items"
              variant="text"
              sx={{ color: "white" }}
            >
              <Link className="nav-links" href="/manage">
                Manage Vendors
              </Link>
            </Button>
            <Button
              className="nav-items"
              variant="text"
              sx={{ color: "white" }}
            >
              <Link className="nav-links" href="/logout">
                Logout
              </Link>
            </Button>
          </Toolbar>
        </Appbar>
      </Card>
    </div>
  );
};

export default Navbar;
