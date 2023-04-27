import { Box } from "@mui/material";
import Header from "../components/Header";

const Qualidade = () => {
  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="QUALIDADE" subtitle="Todos os relatórios da fábrica" />
      </Box>
    </Box>
  );
};

export default Qualidade;
