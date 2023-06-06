import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import Section2 from "../section/Section2";
import { useState } from "react";
import styled from "@emotion/styled";
import TopInfo from "../../components/TopInfo";

import BarChart from "../BarChart";

const Seccao2 = () => {
  const [checked2, setChecked2] = useState(true);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    // COLUNA 1
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
        pb="20px"
        justifyContent="center"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Problemas detetados" subtitle="0" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Em execução" subtitle="5" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Esperado" subtitle="10" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Aguarda entrada" subtitle="1" />
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(16, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
        pb="20px"
      >
        <Box gridColumn="span 8">
          {/* <Typography
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            p="5px 0 5px 0"
            variant="h3"
          >
            Secção Matéria prima
          </Typography> */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="55vh"
            backgroundColor={colors.primary[400]}
          >
            <Section2 checked={checked2} />
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          height="55vh"
        >
          <BarChart />
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(16, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
        pb="20px"
      >
        {/* COLUNA 2 */}
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
                Últimas Encomendas
              </Typography>
              <Typography variant="h5" color={colors.grey[400]}>
                Encomendas da Matéria Prima
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
              Nome da Encomenda
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
              Nome da Encomenda
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
              Nome da Encomenda
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
              Nome da Encomenda
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
              Nome da Encomenda
            </Typography>
            <a href="#" style={{ textDecoration: "none" }}>
              <Typography variant="h5" color={colors.blueAccent[400]}>
                Mais detalhes
              </Typography>
            </a>
          </Box3>
        </Box>
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
      </Box>
      {/* TESTE */}
      {/* 
      <Box
        display="grid"
        gridTemplateColumns="repeat(16,1fr)"
        gridAutoFlow="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 16"
          backgroundColor={colors.primary[400]}
          height="60vh"
        >
          <Box m="20px 0px 0px 20px">
   
          </Box>
          <BarChart />
        </Box>
      </Box> */}
    </Box>
  );
};

export default Seccao2;
const Box3 = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px 20px;
  background-color: colors.primary[400];

  :hover {
    background-color: grey;
    transition: background-color 0.5s ease;
  }
`;
