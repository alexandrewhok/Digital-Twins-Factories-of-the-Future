import { Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../../theme";
import TopInfo from "../components/TopInfo";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";

import Section1 from "../components/section/Section1";
import Section2 from "../components/section/Section2";
import Section3 from "../components/section/Section3";
import Section4 from "../components/section/Section4";
import Section5 from "../components/section/Section5";

// import sec5 from "../components/section/sec5.svg";
// import sec4 from "../components/section/sec4.svg";
// import sec3 from "../components/section/sec3.svg";
// import sec2 from "../components/section/sec2.svg";
// import sec1 from "../components/section/sec1.svg";
import { useState } from "react";
import styled from "@emotion/styled";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);

  // const handleSwitch = (event) => {//SE QUISER ALTERAR TODOS AO MESMO TEMPO com o onSwitch
  //   setChecked1(event.target.checked1);
  //   setChecked2(event.target.checked2);
  //   setChecked3(event.target.checked3);
  //   setChecked4(event.target.checked4);
  //   setChecked5(event.target.checked5);
  // };

  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Visão geral da fábrica" />
      </Box>
      {/* TOP INFO */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(15, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Em produção" subtitle="20" />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Montagem" subtitle="20" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Desmontagem" subtitle="20" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Aguardar" subtitle="20" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Finalizadas" subtitle="20" />
        </Box>
        {/* TOP VIEW FLOOR */}
        <Box gridColumn="span 12" backgroundColor={colors.primary[400]}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            m="20px"
          >
            <Box m="10px">
              {/* <img src={sec5} alt="sec5" /> */}
              <Section5 checked={checked5} />
            </Box>
            <Box m="10px">
              {/* <img src={sec4} alt="sec4" /> */}
              <Section4 checked={checked4} />
            </Box>
            <Box m="10px">
              {/* <img src={sec3} alt="sec3" /> */}
              <Section3 checked={checked3} />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            m="20px"
          >
            <Box m="10px">
              {/* <img src={sec1} alt="sec1" /> */}
              <Section1 checked={checked1} />
            </Box>
            <Box m="10px">
              {/* <img src={sec2} alt="sec2" /> */}
              <Section2 checked={checked2} />
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 3"
          overflow="auto"
          height="560px"
          backgroundColor={colors.primary[400]}
        >
          <Box2>
            <Box textAlign="left">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                m="30px 20px 10px 20px"
                fontWeight="bold"
              >
                Secções
              </Typography>
            </Box>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={
                  <Switch
                    defaultChecked
                    color="secondary"
                    onChange={() => setChecked1(!checked1)}
                  />
                }
                label="Secção 1"
                labelPlacement="start"
              />
            </Box1>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={
                  <Switch
                    defaultChecked
                    color="secondary"
                    onChange={() => setChecked2(!checked2)}
                  />
                }
                label="Secção 2"
                labelPlacement="start"
              />
            </Box1>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={
                  <Switch
                    defaultChecked
                    color="secondary"
                    onChange={() => setChecked3(!checked3)}
                  />
                }
                label="Secção 3"
                labelPlacement="start"
              />
            </Box1>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={
                  <Switch
                    defaultChecked
                    color="secondary"
                    onChange={() => setChecked4(!checked4)}
                  />
                }
                label="Secção 4"
                labelPlacement="start"
              />
            </Box1>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={
                  <Switch
                    defaultChecked
                    color="secondary"
                    onChange={() => setChecked5(!checked5)}
                  />
                }
                label="Secção 5"
                labelPlacement="start"
              />
            </Box1>
          </Box2>
          <Divider />
          <Box gridColumn="span 3" backgroundColor={colors.primary[400]}>
            <Box textAlign="left">
              <Typography
                variant="h3"
                color={colors.grey[100]}
                m="30px 20px 10px 20px"
                fontWeight="bold"
              >
                Período
              </Typography>
            </Box>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={<Switch defaultChecked color="secondary" />}
                label="Manhã"
                labelPlacement="start"
              />
            </Box1>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={<Switch defaultChecked color="secondary" />}
                label="Tarde"
                labelPlacement="start"
              />
            </Box1>
            <Box1>
              <FormControlLabel
                componentsProps={{ typography: { variant: "h5" } }}
                value="start"
                control={<Switch defaultChecked color="secondary" />}
                label="Noite"
                labelPlacement="start"
              />
            </Box1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

const Box1 = styled.div`
  border-bottom: 1px solid grey;
  margin: 10px 0px 0px 0px;

  > label {
    padding: 8px 16px 10px;
    margin: 0 !important;
    display: flex;
    justify-content: space-between;
  }
`;

const Box2 = styled.div`
  margin-bottom: 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 20px;
`;
