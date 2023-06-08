import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const TopInfo = ({ title, subtitle, subtitleColor = "grey.100" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Get the color object from the theme palette
  const colorObject = theme.palette[subtitleColor];

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
            sx={{ color: colorObject }} // Use the color object
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopInfo;
