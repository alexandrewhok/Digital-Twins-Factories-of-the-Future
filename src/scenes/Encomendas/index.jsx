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
import CloseIcon from "@mui/icons-material/Close";
import Header from "../global/Header";
import TopInfo from "../global/TopInfo";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";

import { DataGrid } from "@mui/x-data-grid";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { mockDataOrders } from "../../data/mockData";

const Encomendas = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // BOTÃO DE REGISTAR ENCOMENDA
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  // Form state
  const [orderName, setOrderName] = React.useState("");
  const [orderValue, setOrderValue] = React.useState("");
  const [selectedMaterials, setSelectedMaterials] = React.useState([]);
  const [materialQuantities, setMaterialQuantities] = React.useState({});
  const materials = ["Madeira", "Ferro", "Vidro"];
  const [showCloseIcon, setShowCloseIcon] = React.useState(false);

  const handleOrderNameChange = (event) => {
    setOrderName(event.target.value);
  };

  const handleOrderValueChange = (event) => {
    setOrderValue(event.target.value);
  };

  const handleMaterialClick = (material) => {
    setSelectedMaterials((prevSelected) => {
      if (prevSelected.includes(material)) {
        return prevSelected.filter((selected) => selected !== material);
      } else {
        return [...prevSelected, material];
      }
    });
  };
  const handleMaterialQuantityChange = (event, material) => {
    const value = event.target.value;
    setMaterialQuantities((prevState) => ({
      ...prevState,
      [material]: value,
    }));
  };

  //TABELA
  const { id } = useParams(); // Get the ID parameter from the URL

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
      field: "seccaoatual",
      headerName: "Secção atual",
      flex: 1,
    },
    {
      field: "registo",
      headerName: "Data de registo",
      flex: 1,
    },
    {
      field: "Maisdetalhes",
      headerName: "Mais detalhes",
      flex: 1,
      renderCell: () => (
        <Button
          sx={{
            backgroundColor: colors.blueAccent[400],
            color: colors.grey[100],
            fontSize: "10px",
            fontWeight: "bold",
            padding: "10px 20px",

            "&:hover": {
              backgroundColor: colors.grey[100],
              color: colors.blueAccent[600],
            },
          }}
          variant="contained"
          color="primary"
          component={Link}
          to="/EncomendaX"
        >
          Mais detalhes
        </Button>
        //   <Button
        //   variant="contained"
        //   color="primary"
        //   component={Link}
        //   to={`/EncomendaX/${params.row.id}`}
        // >
        //  Mais detalhes
        // </Button> //PARA PERCORRER TODOS OS IDS
      ),
    },
  ];

  const handleDetailsClick = (orderId) => {
    console.log("Clicked on order with ID:", orderId);
  };

  return (
    <Box m="15px" pb="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="ENCOMENDAS"
          subtitle="Visão geral das Encomendas da fábrica"
        />
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
          textAlign="center"
        >
          <TopInfo title="Em produção" subtitle="8" />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Aguarda entrada" subtitle="2" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Em espera" subtitle="0" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Previsto" subtitle="10" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <TopInfo title="Nível de produção" subtitle="Boa" />
        </Box>
        {/* TABELA DE ENCOMENDAS */}
        <Box
          gridColumn="span 15"
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
                  Todas as encomendas
                </Typography>
                <Typography variant="h5" color={colors.grey[400]}>
                  Todas as encomendas registadas na plataforma
                </Typography>
              </Box>
              <Box>
                {/* BOTÃO PARA ABRIR OVERLAY DE REGISTAR ENCOMENDA */}
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
                  Registar encomenda
                  <AddIcon sx={{ ml: "10px" }} />
                </Button>
                {/* DIALOG DE REGISTAR ENCOMENDA */}
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
                    <Typography variant="h3">
                      Registar nova encomenda
                    </Typography>
                  </DialogTitle>
                  <DialogContent
                    sx={{
                      height: "70vh",
                      backgroundColor: colors.primary[400],
                      padding: "30px",
                    }}
                  >
                    <DialogContentText
                      sx={{ color: colors.primary[100], paddingTop: "20px" }}
                    >
                      Introduza os dados da nova encomenda
                    </DialogContentText>
                    <Typography variant="subtitle1">Nome:</Typography>
                    <TextField
                      required
                      margin="dense"
                      id="nome-encomenda"
                      label="Nome da encomenda"
                      type="text"
                      fullWidth
                      placeholder="Introduzir nome"
                    />
                    <Typography variant="subtitle1">Valor:</Typography>
                    <TextField
                      required
                      margin="dense"
                      id="valor-encomenda"
                      label="Valor"
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
                          <InputAdornment position="start">€</InputAdornment>
                        ),
                      }}
                    />

                    <Box mt={2}>
                      <Typography variant="subtitle1">Materiais:</Typography>
                      <Box mt={1} display="flex" justifyContent="flex-start">
                        {materials.map((material, index) => (
                          <Button
                            key={material}
                            variant={
                              selectedMaterials.includes(material)
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => handleMaterialClick(material)}
                            sx={{
                              marginRight: "8px",
                              backgroundColor: selectedMaterials.includes(
                                material
                              )
                                ? "green"
                                : "transparent",
                              color: selectedMaterials.includes(material)
                                ? "white"
                                : "green",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: selectedMaterials.includes(
                                  material
                                )
                                  ? "darkgreen"
                                  : "lightgreen",
                              },
                            }}
                          >
                            <Typography variant="h5">{material}</Typography>
                          </Button>
                        ))}
                      </Box>
                    </Box>
                    {selectedMaterials.length > 0 && (
                      <Box mt={2}>
                        {selectedMaterials.map((material) => (
                          <TextField
                            required
                            margin="dense"
                            id={`quantidade-${material}`}
                            label={`Quantidade (${material})`}
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
                              endAdornment: (
                                <InputAdornment position="end">
                                  kg
                                </InputAdornment>
                              ),
                            }}
                          />
                        ))}
                      </Box>
                    )}
                    <Typography variant="subtitle1" mt={2}>
                      Observações:
                    </Typography>
                    <TextField
                      margin="dense"
                      id="observacoes"
                      label="Adicionar observações"
                      multiline
                      rows={4}
                      fullWidth
                      variant="outlined"
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
                      backgroundColor: colors.greenAccent[400],
                      color: colors.primary[400],
                      padding: "10px",
                    }}
                  >
                    <Typography variant="subtitle1">
                      Nova encomenda adicionada com sucesso!!
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
              height="100vh"
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
                rows={mockDataOrders}
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

export default Encomendas;
