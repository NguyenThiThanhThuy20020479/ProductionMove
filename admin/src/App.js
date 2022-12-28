import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo,useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout/index.jsx";
import Dashboard from "./scenes/dashboard";
import User from "./scenes/user/user";
import { UserData } from "./scenes/data";
import PieChart from "./scenes/components/chart/Executive.jsx"
import LineChart from "./scenes/components/chart/Facility";
import AddEmployee from "./scenes/user/create";
import EditEmployee from "./scenes/user/edit";
import Distribution from "./scenes/components/chart/Distribution";
import Maintenance from "./scenes/components/chart/Maintenance";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element= {< User/>}/>
        <Route path="/executive" element= {<PieChart/>}/>
        <Route path="/facility" element= {<LineChart/>}/>
        <Route path='/customers/create' element={<AddEmployee/>}></Route>
        <Route path='/customers/edit/:empid' element={<EditEmployee />}></Route>
        <Route path="/distribution" element= {<Distribution />}/>
        <Route path="/maintenance" element= {<Maintenance/>}/>
        </Route>
        </Routes>

      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;






