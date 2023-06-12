import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  InputAdornment,
  useTheme,
  Popover,
  IconButton,
} from "@mui/material";
import Header from "../components/Header";
import TopInfo from "../components/TopInfo";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";

import {
  mockMaterial,
  mockPieData,
  mockLineDataMaterial,
} from "../../data/mockData";
import PieChart from "../components/PieChart";
import LinechartMaterial from "../components/LinechartMaterial";

const MateriaPrima = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // BOTÃO DE REGISTAR ENCOMENDA
  const [open, setOpen] = React.useState(false);
  const [openPopover, setOpenPopover] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    setTimeout(() => {
      setOpenPopover(true);
      setShowCloseIcon(true);
    }, 1000); // Adjust the delay as needed
  };

  const handleClosePopover = () => {
    setOpenPopover(false);
    setShowCloseIcon(false);
  };

  // const openPopover = Boolean(anchorEl);
  const popoverId = openPopover ? "popover" : undefined;

  const [showCloseIcon, setShowCloseIcon] = React.useState(false);

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
      field: "estado",
      headerName: "Estado",
      flex: 1,
    },
    {
      field: "quantidade",
      headerName: "Quantidade",
      flex: 1,
    },
  ];

  return (
    <Box m="15px" pb="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Matéria Prima" subtitle="Materiais" />
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
          <TopInfo title="Materiais" subtitle="5" />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Em utilização" subtitle="2" />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Sem utilização" subtitle="3" />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Estado Geral" subtitle="Boa" />
        </Box>
        {/* TABELA DE RELATÓRIOS */}
        <Box
          gridColumn="span 8"
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
                  Todos os materias
                </Typography>
                <Typography variant="h5" color={colors.grey[400]}>
                  Todos os materiais registados na plataforma
                </Typography>
              </Box>
              <Box>
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
                  onClick={handleClickOpen}
                >
                  Novo material
                  <AddIcon sx={{ ml: "10px" }} />
                </Button>
                {/* DIALOG DE REGISTAR RELATÓRIO */}
                <Dialog
                  open={open}
                  onClose={handleClose}
                  maxWidth="sm"
                  fullWidth
                >
                  <DialogTitle
                    sx={{
                      backgroundColor: colors.primary[400],
                      color: colors.primary[100],
                    }}
                  >
                    <Typography variant="h3">Registar novo material</Typography>
                  </DialogTitle>
                  <DialogContent
                    sx={{
                      height: "40vh",
                      backgroundColor: colors.primary[400],
                      padding: "30px",
                    }}
                  >
                    <DialogContentText
                      sx={{
                        color: theme.palette.primary[100],
                        paddingTop: "20px",
                      }}
                    >
                      Introduza os dados do material
                    </DialogContentText>
                    <Typography variant="subtitle1">Nome:</Typography>
                    <TextField
                      required
                      margin="dense"
                      id="nome-encomenda"
                      label="Nome do relatório"
                      type="text"
                      fullWidth
                      placeholder="Introduzir nome"
                    />

                    <Typography variant="subtitle1">Quantidade:</Typography>
                    <TextField
                      required
                      margin="dense"
                      id="valor-encomenda"
                      label="Quantidade"
                      type="text"
                      fullWidth
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      }}
                      onChange={(event) => {
                        event.target.value = event.target.value.replace(
                          /[^0-9]/g,
                          ""
                        );
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">Kg</InputAdornment>
                        ),
                      }}
                    />
                  </DialogContent>
                  <DialogActions
                    sx={{
                      backgroundColor: colors.primary[400],
                      color: colors.primary[100],
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: colors.grey[500],
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",

                        "&:hover": {
                          backgroundColor: colors.grey[600],
                          color: "white",
                        },
                      }}
                      onClick={handleClose}
                      color="error"
                    >
                      Cancelar
                    </Button>
                    <Button
                      ref={anchorRef}
                      id="confirm-button"
                      onClick={handleConfirm}
                      aria-describedby={popoverId}
                      variant="contained"
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",

                        "&:hover": {
                          backgroundColor: colors.greenAccent[600],
                          color: "white",
                        },
                      }}
                    >
                      Confirmar
                    </Button>
                  </DialogActions>
                </Dialog>
                <Popover
                  open={openPopover}
                  anchorEl={anchorRef.current}
                  onClose={handleClosePopover}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={2}
                    sx={{
                      backgroundColor: colors.blueAccent[300],
                      color: colors.primary[400],
                      padding: "10px",
                    }}
                  >
                    <Typography variant="subtitle1">
                      Material registado com sucesso!
                    </Typography>
                    {showCloseIcon && (
                      <IconButton onClick={handleClosePopover}>
                        <CloseIcon />
                      </IconButton>
                    )}
                  </Box>
                </Popover>
              </Box>
            </Box>
            {/* TABELA DE ENCOMENDAS */}
            <Box
              pt="20px"
              height="50vh"
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
                rows={mockMaterial}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection  //Considerar a opção de colocar um eliminar button para eliminar várias encomendas de uma vez
              />
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          backgroundColor={colors.primary[400]}
          height="70vh"
        >
          <Box m="20px">
            <Typography
              mb="5px"
              variant="h3"
              color={colors.grey[100]}
              fontWeight="bold"
            >
              Utilização dos materiais
            </Typography>
            <Typography variant="h5" color={colors.grey[400]}>
              Análise dos materiais em média por semana (Kg)
            </Typography>
          </Box>
          <Box height="55vh">
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 16"
          backgroundColor={colors.primary[400]}
          height="70vh"
        >
          <Box m="20px">
            <Typography
              mb="5px"
              variant="h3"
              color={colors.grey[100]}
              fontWeight="bold"
            >
              Previsão de reposição de matéria prima
            </Typography>
            <Typography variant="h5" color={colors.grey[400]}>
              Quantidade prevista para reposição de stock (Kg)
            </Typography>
          </Box>
          <Box height="55vh">
            <LinechartMaterial />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MateriaPrima;
