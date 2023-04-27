import { Box } from "@mui/material";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <Box m="15px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="ENCOMENDAS"
          subtitle="Visão geral das Encomendas da fábrica"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
