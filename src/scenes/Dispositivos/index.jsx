import { Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../../theme";
import TopInfo from "../components/TopInfo";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined"; //Dispositivos
import IconButton from "@mui/material/IconButton";

const Dispositivos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px" mb="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DISPOSITIVOS"
          subtitle="Ligação a dispositivos da fábica"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="50vh"
        m="20px"
      >
        <Box
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
          alignItems="center"
          p="30px"
          borderRadius="5px"
        >
          <IconButton aria-label="conect" size="large" color="success">
            <AccountTreeOutlinedIcon />
          </IconButton>
          <Typography variant="h3" color={colors.grey[100]}>
            Conecte um dispositivo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dispositivos;
