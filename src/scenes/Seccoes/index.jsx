import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Header from "../global/Header";
import { tokens } from "../../theme";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import queryString from "query-string";

import Seccao1 from "../../components/Seccao1";
import Seccao2 from "../../components/Seccao2";
import Seccao3 from "../../components/Seccao3";
import Seccao4 from "../../components/Seccao4";
import Seccao5 from "../../components/Seccao5";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        console.log(event);
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const tabValue = Number(queryParams.tab);

  const navigate = useNavigate();

  useEffect(() => {
    if (tabValue >= 0 && tabValue <= 4) {
      setValue(tabValue);
    } else {
      navigate("/Seccoes?tab=0", { replace: true });
    }
  }, [tabValue, navigate]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/Seccoes?tab=${newValue}`);
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SECÇÕES" subtitle="Visão detalhada de cada secção" />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ sx: { backgroundColor: "#adadad" } }}
            sx={{
              "& button:hover": { backgroundColor: "#0DCAF0", color: "white" },
              "& button": {
                fontWeight: theme.typography.h4,
                textTransform: "none",
              },
              "& button.Mui-selected": {
                backgroundColor: "#0D6EFD",
                color: "white",
              },
            }}
          >
            <Tab label="Secção 1" {...a11yProps(0)} />
            <Tab label="Secção 2" {...a11yProps(1)} />
            <Tab label="Secção 3" {...a11yProps(2)} />
            <Tab label="Secção 4" {...a11yProps(3)} />
            <Tab label="Secção 5" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Seccao1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Seccao2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Seccao3 />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Seccao4 />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Seccao5 />
        </TabPanel>
      </Box>
    </Box>
  );
}
