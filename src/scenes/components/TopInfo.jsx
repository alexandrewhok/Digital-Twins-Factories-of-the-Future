import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const TopInfo = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="30px">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box pb="10px">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: colors.greenAccent[500] }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopInfo;
