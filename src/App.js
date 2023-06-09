import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Encomendas from "./scenes/Encomendas";
import Seccoes from "./scenes/Seccoes";
import Qualidade from "./scenes/Qualidade";
import MateriaPrima from "./scenes/MateriaPrima";
import Dispositivos from "./scenes/Dispositivos";
import EncomendaX from "./scenes/EncomendaX";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: "flex" }}>
          <Sidebar isSidebar={isSidebar} />
          <div style={{ flex: 1, overflow: "auto" }}>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/Encomendas" element={<Encomendas />} />
              <Route exact path="/Qualidade" element={<Qualidade />} />
              <Route exact path="/Seccoes" element={<Seccoes />} />
              <Route exact path="/MateriaPrima" element={<MateriaPrima />} />
              <Route exact path="/Dispositivos" element={<Dispositivos />} />
              <Route exact path="/EncomendaX" element={<EncomendaX />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
