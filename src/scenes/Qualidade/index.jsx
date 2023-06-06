import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import TopInfo from "../components/TopInfo";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";
import WarningIcon from "@mui/icons-material/Warning";

import { mockDataOReports } from "../../data/mockData";

const Qualidade = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "nome",
      headerName: "Nome",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "registo",
      headerName: "Data de registo",
      flex: 1,
    },
    {
      field: "tipo",
      headerName: "Tipo",
      flex: 1,
    },
    {
      field: "seccao",
      headerName: "Secção",
      flex: 1,
    },
    {
      field: "registopor",
      headerName: "Registado por",
      flex: 1,
    },
  ];

  return (
    <Box m="15px" pb="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="QUALIDADE"
          subtitle="Relatórios registados das encomendas"
        />
      </Box>
      {/* TOP INFO */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(16, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Total de Relatórios" subtitle="16" />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Seguimento" subtitle="14" />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Reportados" subtitle="2" />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Registados Hoje" subtitle="3" />
        </Box>
        {/* TABELA DE RELATÓRIOS */}
        <Box
          gridColumn="span 16"
          backgroundColor={colors.primary[400]}
          // height="60vh"
        >
          <Box m="20px">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              p="30px 0 20px 0"
            >
              <Box display="flex" flexDirection="column">
                <Typography
                  mb="5px"
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                >
                  Todos os relatórios
                </Typography>
                <Typography variant="h5" color={colors.grey[400]}>
                  Todos os relatórios registados na plataforma
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    backgroundColor: colors.redAccent[600],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    marginRight: "25px",

                    "&:hover": {
                      backgroundColor: colors.redAccent[700],
                      color: colors.grey[100],
                    },
                  }}
                >
                  Reportar
                  <WarningIcon sx={{ ml: "10px" }} />
                </Button>
                <Button
                  sx={{
                    backgroundColor: colors.blueAccent[600],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",

                    "&:hover": {
                      backgroundColor: colors.grey[100],
                      color: colors.blueAccent[600],
                    },
                  }}
                >
                  Registar encomenda
                  <AddIcon sx={{ ml: "10px" }} />
                </Button>
              </Box>
            </Box>
            {/* TABELA DE ENCOMENDAS */}
            <Box
              pt="20px"
              height="85vh"
              sx={{
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: theme.typography.h4,
                },
                "& .MuiDataGrid-root": {
                  border: "none",
                  fontWeight: theme.typography.h5,
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  borderTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                },
              }}
            >
              <DataGrid
                rows={mockDataOReports}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection  //Considerar a opção de colocar um eliminar button para eliminar várias encomendas de uma vez
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Qualidade;
