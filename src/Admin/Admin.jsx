import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import CreateProducts from "./Components/CreateProducts";
import OrdersTable from "./Components/OrdersTable";
import CustomersTable from "./Components/CustomersTable";
import ProductsTable from "./Components/ProductsTable";
import Dashboard from "./Components/Dashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
  { name: "Customers", path: "/admin/customer", icon: <DashboardIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
  {
    name: "AddProducts",
    path: "/admin/product/create",
    icon: <DashboardIcon />,
  },
  // {
  //   name: "Profile",
  //   path: "/admin/profile",
  //   icon: <AccountCircleIcon />,
  // },
];

const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // border:'1px solid black',
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}
        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: `${isLargeScreen}?"flex":"block` }}>
        <Drawer
          variant="permanent"
          sx={{
            height: "100vh",

            width: 240,
            flexShrink: 0,
          }}
        >
          {drawer}
        </Drawer>

        <Box>
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/product/create" element={<CreateProducts />} />

            <Route path="/orders" element={<OrdersTable />} />
            <Route path="/customers" element={<CustomersTable/>} />
            <Route path="/products" element={<ProductsTable />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
};

export default Admin;
