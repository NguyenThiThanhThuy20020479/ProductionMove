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
import CenterStatistic from "./admin/scenes/statistic/center/center";
import Report from "./basis/scenes/status/report";
import LayoutBasis from "./basis/scenes/layout";
import Distribute from "./basis/scenes/distribute/distribute";
import Import from "./basis/scenes/import";
import Request from "./basis/scenes/request";
import Fault from "./basis/scenes/fault";
import ImportFromBasis from "./agent/scenes/import";
import LayoutAgent from "./agent/scenes/layout";
import AgentList from "./admin/scenes/user/agent";
import AgentStatistic1 from "./agent/scenes/statistic";
import AgentRequest from "./agent/scenes/request";
import Return from "./agent/scenes/return";
import BasistList from "./admin/scenes/user/basis";
import CenterList from "./admin/scenes/user/center";
import LayoutCenter from "./center/scenes/layout";
import Centerservice from "./center/scenes/centerservice";
import ServiceCenterReturn from "./center/scenes/centerreturn";
import CenterStatistic1 from "./center/scenes/statistic";
import CenterRequest from "./center/scenes/components/report";
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
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/customers" element= {<User/>}/>
        <Route path="/admin/agent/add" element = {< Agent/>}/>
        <Route path = '/admin/basis/add' element = {<BasistList/>}/>
        <Route path = '/admin/center/add' element = {<CenterList/>}/>
        <Route path="/admin/executive" element= {<PieChart/>}/>
        <Route path="/admin/facility" element= {<LineChart/>}/>
        <Route path="/admin/agent/add/:id" element = {<Register/>}/>
        <Route path="/admin/agent" element= {<AgentStatistic/>}/>
        <Route path ="/admin/basis" element={<BasisStatistic/>}/>
        <Route path="/admin/products" element = {<Products/>}/>
        <Route path="/admin/distribution1" element= {<Distribution />}/>
        <Route path="/admin/maintenance" element= {<Maintenance/>}/>
        <Route path="/admin/products/:id" element = {<Feature/>}/>
        <Route path="/admin/distribution" element = {<Table/>}/>
        <Route path = "/admin/center" element = {<CenterStatistic/>}/>
        </Route>
        </Route>
        </Routes>
        <Routes>
        <Route element={<LayoutBasis/>}>
          <Route path="/basis/report" element = {<Report></Report>}>
          </Route>
          <Route path = '/basis/import' element = {<Import/>}/>
          <Route path = '/basis/request' element = {<Request/>}/>
          <Route path="/basis/distribution" element= {<Distribute/>}/>
          <Route path= '/basis/fault' element= {<Fault/>}/>
        </Route>
        </Routes>
        <Routes>
        <Route element={<LayoutAgent/>}>
          <Route path = '/agent/import' element = {<ImportFromBasis/>}/>
          <Route path="/agent/distribution" element = {<AgentStatistic1/>}/>
          <Route path="/agent/report" element = {<AgentRequest/>}/>
          <Route path="/agent/return" element = {<Return/>}/>
        </Route>
        </Routes>
        <Routes>
        <Route element= {<LayoutCenter/>}>
          <Route path = '/center/import' element = {<Centerservice/>}/>
          <Route path="/center/fault" element = {<CenterStatistic1/>}/>
          <Route path="/center/report" element = {<ServiceCenterReturn/>}/>
          <Route path="/center/distribution" element = {<CenterRequest/>}/>
        <Route/>   
        </Route>
        </Routes>    
      </ThemeProvider>
   </BrowserRouter>
    </div>
  );
}
export default App;






