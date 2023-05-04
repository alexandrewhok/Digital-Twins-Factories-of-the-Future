import { Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../../theme";
import TopInfo from "../components/TopInfo";

const Dispositivos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DISPOSITIVOS"
          subtitle="Ligação a dispositivos da fábica"
        />
      </Box>
    </Box>
  );
};

export default Dispositivos;
