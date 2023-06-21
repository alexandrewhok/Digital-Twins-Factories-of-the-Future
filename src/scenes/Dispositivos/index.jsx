import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined"; //Dispositivos
import IconButton from "@mui/material/IconButton";
import Header from "../global/Header";

const Dispositivos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DISPOSITIVOS"
          subtitle="Ligação a dispositivos externos"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 200px)" /* Subtract the height of the top bar if it has a fixed height */
        overflow="hidden" /* Hide any content overflow */
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
