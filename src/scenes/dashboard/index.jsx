import { Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../../theme";
import TopInfo from "../components/TopInfo";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";

import Switch from "@mui/material/Switch";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Chip from "@mui/material/Chip";
import Checkbox from "@mui/material/Checkbox";

import Section1 from "../components/section/Section1";
import Section2 from "../components/section/Section2";
import Section3 from "../components/section/Section3";
import Section4 from "../components/section/Section4";
import Section5 from "../components/section/Section5";

import LineChart from "../components/LineChart";

import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
    <Box m="15px" pb="30px">
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
          <TopInfo title="Em produção" subtitle="20" subtitleColor="green" />
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
              <Link to="/Seccoes?tab=4">
                <Section5 checked={checked5} />
              </Link>
            </Box>
            <Box m="10px">
              {/* <img src={sec4} alt="sec4" /> */}
              <Link to="/Seccoes?tab=3">
                <Section4 checked={checked4} />
              </Link>
            </Box>
            <Box m="10px">
              {/* <img src={sec3} alt="sec3" /> */}
              <Link to="/Seccoes?tab=2">
                <Section3 checked={checked3} />
              </Link>
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
              <Link to="/Seccoes?tab=0">
                <Section1 checked={checked1} />
              </Link>
            </Box>
            <Box m="10px">
              {/* <img src={sec2} alt="sec2" /> */}
              <Link to="/Seccoes?tab=1">
                <Section2 checked={checked2} />
              </Link>
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

        {/* GRÁFICO DE ANÁLISE */}
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
          height="60vh"
        >
          <Box m="20px 0px 0px 20px">
            <Typography
              mb="5px"
              variant="h3"
              color={colors.grey[100]}
              fontWeight="bold"
            >
              Status das encomendas
            </Typography>
            <Typography variant="h5" color={colors.grey[400]}>
              Análise e previsão das encomendas finalizadas
            </Typography>
          </Box>

          <LineChart />
        </Box>

        {/* INFORMAÇÃO DIÁRIA */}
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]}>
          <Box
            m="20px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color={colors.grey[200]} m="10px">
              Concluídas (hoje)
            </Typography>
            <Typography variant="h3" color={colors.greenAccent[500]}>
              15
            </Typography>
          </Box>
          <Box
            m="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color={colors.grey[200]} m="10px">
              Recebidas (hoje)
            </Typography>
            <Typography variant="h3" color={colors.greenAccent[500]}>
              10
            </Typography>
          </Box>
          <Box
            m="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color={colors.grey[200]} m="10px">
              Tempo de espera (secção)
            </Typography>
            <Typography variant="h3" color={colors.greenAccent[500]}>
              2 min
            </Typography>
          </Box>
          <Box
            m="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color={colors.grey[200]} m="10px">
              Tempo por encomenda
            </Typography>
            <Typography variant="h3" color={colors.greenAccent[500]}>
              20 min
            </Typography>
          </Box>
          <Box
            m="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5" color={colors.grey[200]} m="10px">
              Utilização de energia
            </Typography>
            <Typography variant="h3" color={colors.greenAccent[500]}>
              80%
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* REPORTS  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(16, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
        margin="20px 0 20px 0"
      >
        <Box gridColumn="span 8" backgroundColor={colors.primary[400]}>
          <Box
            m="30px 30px 20px 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography
                mb="5px"
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Últimos Relatórios
              </Typography>
              <Typography variant="h5" color={colors.grey[400]}>
                Todas as secções
              </Typography>
            </Box>

            <a href="/Qualidade" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color={colors.blueAccent[400]}>
                Mais detalhes
              </Typography>
            </a>
          </Box>
          <Box3
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" color={colors.grey[100]}>
              Relatório X
            </Typography>
            <a href="#" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color={colors.blueAccent[400]}>
                Mais detalhes
              </Typography>
            </a>
          </Box3>
          <Box3
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" color={colors.grey[100]}>
              Relatório X
            </Typography>
            <a href="#" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color={colors.blueAccent[400]}>
                Mais detalhes
              </Typography>
            </a>
          </Box3>
          <Box3
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" color={colors.grey[100]}>
              Relatório X
            </Typography>
            <a href="#" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color={colors.blueAccent[400]}>
                Mais detalhes
              </Typography>
            </a>
          </Box3>
          <Box3
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" color={colors.grey[100]}>
              Relatório X
            </Typography>
            <a href="#" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color={colors.blueAccent[400]}>
                Mais detalhes
              </Typography>
            </a>
          </Box3>
          <Box3
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" color={colors.grey[100]}>
              Relatório X
            </Typography>
            <a href="#" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color={colors.blueAccent[400]}>
                Mais detalhes
              </Typography>
            </a>
          </Box3>
        </Box>

        {/* TASKS */}
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          height="55vh"
        >
          <Box
            m="30px 30px 20px 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <Typography
                mb="5px"
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Tarefas
              </Typography>
              <Typography variant="h5" color={colors.grey[400]}>
                Hoje
              </Typography>
            </Box>
            <Box>
              <a href="#" style={{ textDecoration: "none" }}>
                <Typography variant="h5" color={colors.blueAccent[400]}>
                  Ver todas
                </Typography>
              </a>
            </Box>
          </Box>
          <Box4>
            <Typography variant="h4" color={colors.grey[400]}>
              Cria nova tarefa
            </Typography>

            <AddBoxIcon />
          </Box4>
          <Box4>
            <Box display="flex" alignItems="center">
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: colors.grey[400],
                  "&.Mui-checked": {
                    color: colors.grey[100],
                  },
                }}
              />
              <Typography variant="h4" color={colors.grey[100]}>
                Terminar encomenda ID.20
              </Typography>
            </Box>
            <Chip label="Prioritário" color="warning" size="small" />
          </Box4>
          <Box4>
            <Box display="flex" alignItems="center">
              <Checkbox
                {...label}
                sx={{
                  color: colors.grey[400],
                  "&.Mui-checked": {
                    color: colors.grey[100],
                  },
                }}
              />
              <Typography variant="h4" color={colors.grey[100]}>
                Falta de material na montagem
              </Typography>
            </Box>
            <Chip label="Urgente" color="error" size="small" />
          </Box4>
          <Box4>
            <Box
              display="flex"
              alignItems="center"
              backgroundColor="colors.primary[400]"
            >
              <Checkbox
                {...label}
                sx={{
                  color: colors.grey[400],
                  "&.Mui-checked": {
                    color: colors.grey[100],
                  },
                }}
              />
              <Typography variant="h4" color={colors.grey[100]}>
                Nome da tarefa
              </Typography>
            </Box>
            <Chip label="Novo" color="info" size="small" />
          </Box4>
          <Box4>
            <Box
              display="flex"
              alignItems="center"
              backgroundColor="colors.primary[400]"
            >
              <Checkbox
                {...label}
                sx={{
                  color: colors.grey[400],
                  "&.Mui-checked": {
                    color: colors.grey[100],
                  },
                }}
              />
              <Typography variant="h4" color={colors.grey[100]}>
                Nome da tarefa
              </Typography>
            </Box>
            <Chip label="Padrão" color="default" size="small" />
          </Box4>
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

const Box3 = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 20px;
  background-color: colors.primary[400];

  :hover {
    background-color: grey;
    transition: background-color 0.5s ease;
  }
`;

const Box4 = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px 15px;
  background-color: colors.primary[400];
`;
