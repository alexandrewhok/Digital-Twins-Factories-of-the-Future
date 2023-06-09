import * as React from "react";
import {
  Box,
  Typography,
  useThemeButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  InputAdornment,
  useTheme,
  Button,
  Popover,
  IconButton,
  TextField,
  MenuItem,
} from "@mui/material";
import TopInfo from "../components/TopInfo";
import { tokens } from "../../theme";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Check from "@mui/icons-material/Check";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import { Link } from "react-router-dom";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
    [`& .${stepConnectorClasses.connectorLine}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
  [`& .${stepConnectorClasses.connectorLine}`]: {
    transition: theme.transitions.create("all"),
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {active || completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const steps = [
  "Secção 1 - Matéria prima",
  "Secção 2 - Montagem",
  "Secção 3 - Desmontagem",
  "Secção 4 - Qualidade",
  "Secção 5 - Transporte",
];

const EncomendaX = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //STEPPER E DIALOG
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedSection, setSelectedSection] = React.useState("");
  const [selectedOrder, setSelectedOrder] = React.useState("");
  const [selectedType, setSelectedType] = React.useState("");

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    // if (!completed[activeStep]) {
    //   const newCompleted = { ...completed };
    //   newCompleted[activeStep] = true;
    //   setCompleted(newCompleted);
    // }
    // handleNext();
    setOpenDialog(true);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCompleted((prevCompleted) => ({
      ...prevCompleted,
      [activeStep]: true,
    }));
    handleNext();
  };

  const [orderName, setOrderName] = React.useState("");
  const [orderValue, setOrderValue] = React.useState("");

  const handleOrderNameChange = (event) => {
    setOrderName(event.target.value);
  };

  const handleOrderValueChange = (event) => {
    setOrderValue(event.target.value);
  };

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
          to="/Encomendas"
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
          Encomenda X
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
          <TopInfo title="Início de processo" subtitle="02-05-2023" />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TopInfo title="Estado" subtitle="Produção" />
        </Box>

        {/* ESTADO DA ENCOMENDA */}
        <Box gridColumn="span 15" backgroundColor={colors.primary[400]}>
          <Box m="20px 0px 0px 20px">
            <Typography
              mb="5px"
              variant="h3"
              color={colors.grey[100]}
              fontWeight="bold"
            >
              Estado da Encomenda
            </Typography>
            <Typography variant="h5" color={colors.grey[400]}>
              Estado em tempo real
            </Typography>
          </Box>

          {/* STEPPER PARA VER OS PAÇOS DA ENCOMENDA */}
          <Box sx={{ width: "100%", marginTop: "80px", height: "40vh" }}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<QontoConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {label}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            <div>
              {allStepsCompleted() ? (
                <React.Fragment>
                  <Typography variant="h5" m="50px" sx={{ mt: 10, mb: 1 }}>
                    Encomenda conluída com sucesso! :)
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      pt: 2,
                      margin: "40px",
                    }}
                  >
                    <Button
                      sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",

                        "&:hover": {
                          backgroundColor: colors.grey[100],
                          color: colors.blueAccent[600],
                        },
                      }}
                      m="40px"
                      onClick={handleReset}
                    >
                      Reiniciar
                    </Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {/* <Typography variant="h5" sx={{ mt: 2, mb: 1, py: 1 }}>
                    secção {activeStep + 1}
                  </Typography> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      pt: 2,
                      margin: "40px",
                    }}
                  >
                    {activeStep !== steps.length && (
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
                        onClick={handleComplete}
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Concluir"
                          : "Próxima secção"}
                      </Button>
                    )}
                  </Box>
                </React.Fragment>
              )}
            </div>
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle
                sx={{
                  backgroundColor: colors.primary[400],
                  color: colors.primary[100],
                }}
              >
                <Typography variant="h3">Registar novo relatório</Typography>
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
                  onChange={(event) => setSelectedSection(event.target.value)}
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
                  onClick={handleCloseDialog}
                  color="error"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleCloseDialog}
                  autoFocus
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EncomendaX;
