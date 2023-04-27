import { Box } from "@mui/material";
import Header from "../components/Header";

const MateriaPrima = () => {
  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="MATÉRIA PRIMA"
          subtitle="Visão geral de toda a matéria prima da fábrica"
        />
      </Box>
    </Box>
  );
};

export default MateriaPrima;
