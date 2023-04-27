import { Box } from "@mui/material";
import Header from "../components/Header";

const Dispositivos = () => {
  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DISPOSITIVOS"
          subtitle="Ligação de dispositivos externos"
        />
      </Box>
    </Box>
  );
};

export default Dispositivos;
