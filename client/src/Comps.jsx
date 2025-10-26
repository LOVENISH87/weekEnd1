import { Box, Button } from '@mui/material';

function MyComponent() {
  return (
    <Box
      sx={{
        p: 4, // 'p' is a shortcut for 'padding', 4 = theme.spacing(4)
        backgroundColor: 'primary.main', // Accesses your theme's main primary color
        '&:hover': {
          backgroundColor: 'primary.dark', // Easy pseudo-classes
        },
      }}
    >
      <Button variant="contained" sx={{ fontSize: '1.2rem', ml: 2 }}>
        My Button
      </Button>
    </Box>
  );
}

export default MyComponent;