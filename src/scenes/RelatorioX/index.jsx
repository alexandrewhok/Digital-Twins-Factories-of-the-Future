import * as React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import TopInfo from "../../scenes/global/TopInfo";
import { tokens } from "../../theme";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import { Link } from "react-router-dom";

const RelatorioX = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px">
      <Box
        display="flex"
        justifyContent="left"
        alignItems="center"
        alignContent="flex-start"
        ml="50px"
      >
        <Link
          to="/Qualidade"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowCircleLeftIcon fontSize="large" />
        </Link>
        <Typography variant="h3" pl="5px">
          Seleção de madeiras - barco ubiwhere
        </Typography>
      </Box>
      {/* TOP INFO */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(15, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
        mt="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="ID" subtitle="1" subtitleColor="green" />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Registo" subtitle="01-05-2023" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Registado por" subtitle="Jonh Doe" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Secção" subtitle="Secção 1" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Tipo" subtitle="Seguimento" />
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(16, 1fr)"
        gridAutoFlow="140px"
        gap="20px"
      >
        {/* OBSERVAÇÕES */}
        <Box
          gridColumn="span 16"
          backgroundColor={colors.primary[400]}
          mt="20px"
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.grey[100]}
            m="40px"
          >
            Informação do relatório
          </Typography>
          <Box m="50px" display="flex">
            <Box mr="100px">
              <Typography variant="h4" m="5px">
                ID da encomenda
              </Typography>
              <Typography variant="h4" fontWeight="bold" m="5px">
                6
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" m="5px">
                Nome da encomenda
              </Typography>
              <Typography variant="h4" fontWeight="bold" m="5px">
                Barco Ubiwhere
              </Typography>
            </Box>
          </Box>
          <Box m="30px">
            <Typography
              mb="20px"
              variant="h3"
              color={colors.grey[100]}
              //   fontWeight="bold"
            >
              Observações
            </Typography>
            <Box border="1px solid grey" p="20px 50px 100px 20px">
              <Typography variant="h4" color={colors.grey[100]}>
                Dimensões X por X por X
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" m="10px">
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.grey[500],
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            margin: "10px",

            "&:hover": {
              backgroundColor: colors.grey[600],
              color: "white",
            },
          }}
        >
          Transferir
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.blueAccent[500],
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            margin: "10px",

            "&:hover": {
              backgroundColor: colors.blueAccent[600],
              color: "white",
            },
          }}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.redAccent[500],
            color: "white",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            margin: "10px",

            "&:hover": {
              backgroundColor: colors.redAccent[600],
              color: "white",
            },
          }}
        >
          Eliminar
        </Button>
      </Box>
    </Box>
  );
};

export default RelatorioX;
