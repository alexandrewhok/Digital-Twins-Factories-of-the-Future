import {
  Box,
  IconButton,
  useTheme,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Paper,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  //USER API
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching random user:", error);
      }
    };

    fetchRandomUser();
  }, []);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (!user) {
    return <div>A carregar... precisa de ligação à internet :(</div>;
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Pesquisar" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton onClick={handleOpenDialog}>
          <PersonOutlinedIcon />
        </IconButton>
        {/* USER DIALOG */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          TransitionComponent={Transition}
          // maxWidth="sm"
          PaperProps={{
            sx: {
              position: "absolute",
              top: "60px",
              right: "20px",
              m: 0,
              backgroundColor: colors.primary[400],
            },
          }}
          aria-describedby="Informação do utilizador"
        >
          <DialogContent>
            <Typography
              variant="h4"
              p="10px"
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="Center"
            >
              Dados do Utilizador
            </Typography>
            <Typography variant="h5" p="5px">
              Name: {`${user.name.first} ${user.name.last}`}
            </Typography>
            <Typography variant="h5" p="5px">
              Email: {user.email}
            </Typography>
            <Typography variant="h5" p="5px">
              Username: {user.login.username}
            </Typography>
            {/* Add more user details as needed */}
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Topbar;
