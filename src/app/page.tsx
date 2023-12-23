import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h1" fontWeight={700}>Hello 👋</Typography>
    </Box>
  );
}
