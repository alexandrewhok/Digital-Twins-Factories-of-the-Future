import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
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
// import styled from "@emotion/styled";
import { DataGrid } from "@mui/x-data-grid";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";

import { mockDataOReports } from "../../data/mockData";

const Qualidade = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // BOTÃO DE REGISTAR ENCOMENDA
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openPopover, setOpenPopover] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedSection, setSelectedSection] = React.useState("");
  const [selectedOrder, setSelectedOrder] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");

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

  const [showCloseIcon, setShowCloseIcon] = React.useState(false);

  const handleOrderNameChange = (event) => {
    setOrderName(event.target.value);
  };

  const handleOrderValueChange = (event) => {
    setOrderValue(event.target.value);
  };

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
                {/* <Button
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
                  Reportar erro
                  <WarningIcon sx={{ ml: "10px" }} />
                </Button> */}
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
                  onClick={handleClickOpen}
                >
                  Reportar erro
                  <WarningIcon sx={{ ml: "10px" }} />
                </Button>
                {/* DIALOG DE REPORTAR ERRO */}
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
                    <Typography variant="h3">Registar erro</Typography>
                  </DialogTitle>
                  <DialogContent
                    sx={{
                      height: "70vh",
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
                      Introduza os dados do erro sucedido
                    </DialogContentText>
                    <Typography variant="subtitle1">Type:</Typography>
                    <TextField
                      select
                      margin="dense"
                      id="type"
                      label="Type"
                      fullWidth
                      value={selectedType}
                      onChange={(event) => setSelectedType(event.target.value)}
                    >
                      <MenuItem value="missing materials">
                        Falta de materiais
                      </MenuItem>
                      <MenuItem value="missing mold">Falta de molde</MenuItem>
                      <MenuItem value="order error">Erro de encomenda</MenuItem>
                      <MenuItem value="other">Outro</MenuItem>
                    </TextField>
                    <Typography variant="subtitle1">
                      Nome do relatório:
                    </Typography>
                    <TextField
                      required
                      margin="dense"
                      id="nome-encomenda"
                      label="Nome drelatório"
                      type="text"
                      fullWidth
                      placeholder="Introduzir nome"
                    />
                    <Typography variant="subtitle1">Secção:</Typography>
                    <TextField
                      select
                      margin="dense"
                      id="section"
                      label="Secção"
                      fullWidth
                      value={selectedSection}
                      onChange={(event) =>
                        setSelectedSection(event.target.value)
                      }
                    >
                      <MenuItem value="Section 1">Secção 1</MenuItem>
                      <MenuItem value="Section 2">Secção 2</MenuItem>
                      <MenuItem value="Section 3">Secção 3</MenuItem>
                      <MenuItem value="Section 4">Secção 4</MenuItem>
                      <MenuItem value="Section 5">Secção 5</MenuItem>
                    </TextField>
                    <Typography variant="subtitle1">
                      Nome da encomenda:
                    </Typography>
                    <TextField
                      select
                      margin="dense"
                      id="order"
                      label="Encomenda"
                      fullWidth
                      value={selectedOrder}
                      onChange={(event) => setSelectedOrder(event.target.value)}
                    >
                      <MenuItem value="Order 1">Encomenda 1</MenuItem>
                      <MenuItem value="Order 2">Encomenda 2</MenuItem>
                      <MenuItem value="Order 3">Encomenda 3</MenuItem>
                      <MenuItem value="Order 4">Encomenda 4</MenuItem>
                    </TextField>

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
                      backgroundColor: colors.blueAccent[300],
                      color: colors.primary[400],
                      padding: "10px",
                    }}
                  >
                    <Typography variant="subtitle1">
                      Erro reportado com sucesso!
                    </Typography>
                    {showCloseIcon && (
                      <IconButton onClick={handleClosePopover}>
                        <CloseIcon />
                      </IconButton>
                    )}
                  </Box>
                </Popover>
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
                  Registar Relatório
                  {/* <AddIcon sx={{ ml: "10px" }} /> */}
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
                    <Typography variant="h3">
                      Registar novo relatório
                    </Typography>
                  </DialogTitle>
                  <DialogContent
                    sx={{
                      height: "80vh",
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
                      Introduza os dados do relatório
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
                    <Typography variant="subtitle1">Secção:</Typography>
                    <TextField
                      select
                      margin="dense"
                      id="section"
                      label="Secção"
                      fullWidth
                      value={selectedSection}
                      onChange={(event) =>
                        setSelectedSection(event.target.value)
                      }
                    >
                      <MenuItem value="Section 1">Secção 1</MenuItem>
                      <MenuItem value="Section 2">Secção 2</MenuItem>
                      <MenuItem value="Section 3">Secção 3</MenuItem>
                      <MenuItem value="Section 4">Secção 4</MenuItem>
                      <MenuItem value="Section 5">Secção 5</MenuItem>
                    </TextField>
                    <Typography variant="subtitle1">Encomenda:</Typography>
                    <TextField
                      select
                      margin="dense"
                      id="order"
                      label="Encomenda"
                      fullWidth
                      value={selectedOrder}
                      onChange={(event) => setSelectedOrder(event.target.value)}
                    >
                      <MenuItem value="Order 1">Encomenda 1</MenuItem>
                      <MenuItem value="Order 2">Encomenda 2</MenuItem>
                      <MenuItem value="Order 3">Encomenda 3</MenuItem>
                    </TextField>
                    <Typography variant="subtitle1">Tipo:</Typography>
                    <TextField
                      select
                      margin="dense"
                      id="type"
                      label="Tipo"
                      fullWidth
                      value={selectedType}
                      onChange={(event) => setSelectedType(event.target.value)}
                    >
                      <MenuItem value="segment">Seguimento</MenuItem>
                      <MenuItem value="error">Conclusão</MenuItem>
                      <MenuItem value="missing materials">Envio</MenuItem>
                    </TextField>
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
                      backgroundColor: colors.blueAccent[300],
                      color: colors.primary[400],
                      padding: "10px",
                    }}
                  >
                    <Typography variant="subtitle1">
                      Nova relatório registado com sucesso!
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
