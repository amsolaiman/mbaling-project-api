'use client';

// @mui
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// package
import { version } from '../../../package.json';
//
import AppList from '../app-list';
import { routeConfig } from '../_config-route';

// ----------------------------------------------------------------------

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'block',
  padding: theme.spacing(5),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.palette.grey[100],
  minHeight: '100vh',
  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  [theme.breakpoints.up('md')]: {
    maxWidth: 900,
  },
}));

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <StyledContainer>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Have fun using the mBALING API v{version}
          </Typography>

          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            Host API: <strong>{process.env.NEXT_PUBLIC_HOST_URL}</strong>
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {routeConfig.map((list) => (
          <AppList key={list.header} data={list} />
        ))}
      </Stack>
    </StyledContainer>
  );
}
