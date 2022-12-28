import { CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo,useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./admin/scenes/layout/index.jsx";
import Dashboard from "./admin/scenes/dashboard";
import User from "./admin/scenes/user/user";
import Agent from "./admin/scenes/user/agent";
import Distribution from "./admin/scenes/components/chart/Distribution";
import Maintenance from "./admin/scenes/components/chart/Maintenance";
import { UserData } from "./admin/scenes/data";
import PieChart from "./admin/scenes/components/chart/Executive.jsx"
import LineChart from "./admin/scenes/components/chart/Facility";
import Register from "./admin/scenes/user/register";
import  Table  from "./admin/scenes/table/table";
import Products from "./admin/scenes/products/product";
import Feature from "./admin/scenes/products/detail";
import Login from "./login";
import ProtectedRoutes from "./protected";
import MultiActionAreaCard from "./admin/scenes/products/detail";
import AgentStatistic from "./admin/scenes/statistic/agent/agent";
import BasisStatistic from "./admin/scenes/statistic/basis/basis";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
        <Route  path="/admin" element = {<Login/>}/>
        <Route element = {<ProtectedRoutes/>}>
        <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element= {<User/>}/>
        <Route path="/account/add" element = {< Agent/>}/>
        <Route path="/executive" element= {<PieChart/>}/>
        <Route path="/facility" element= {<LineChart/>}/>
        <Route path="/account/add/:id" element = {<Register/>}/>
        <Route path="/agent" element= {<AgentStatistic/>}/>
        <Route path = "/production basis" element={<BasisStatistic/>}/>
        <Route path="/products" element = {<Products/>}/>
        <Route path="/distribution1" element= {<Distribution />}/>
        <Route path="/maintenance" element= {<Maintenance/>}/>
        <Route path="/products/:id" element = {<Feature/>}/>
        <Route path="/distribution" element = {<Table/>}/>
        </Route>
        </Route>
        </Routes>

      </ThemeProvider>
      
      </BrowserRouter>
    </div>

  );
}

export default App;






