import { Box } from "@mui/material";
import Header from "../components/Header";

const Seccoes = () => {
  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="SECÇÕES"
          subtitle="Visão detalhada de cada secção da fábrica"
        />
      </Box>
    </Box>
  );
};

export default Seccoes;
