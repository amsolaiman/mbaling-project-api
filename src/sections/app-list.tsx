// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

//
import { RouteConfig } from './_config-route';

// ----------------------------------------------------------------------

interface StyledBoxProps {
  type: 'get' | 'post' | 'put' | 'patch' | 'delete';
}

const StyledBox = styled('span')<StyledBoxProps>(({ type = 'get', theme }) => ({
  ...theme.typography.caption,
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.25, 0.75),
  borderRadius: theme.spacing(0.5),
  fontWeight: 700,
  color: theme.palette.common.white,
  ...(type === 'get' && {
    backgroundColor: theme.palette.success.light,
  }),
  ...(type === 'post' && {
    backgroundColor: theme.palette.info.light,
  }),
  ...(type === 'put' && {
    backgroundColor: theme.palette.warning.light,
  }),
  ...((type === 'patch' || type === 'delete') && {
    backgroundColor: theme.palette.error.light,
  }),
}));

// ----------------------------------------------------------------------

type Props = {
  data: RouteConfig;
};

export default function AppList({ data }: Props) {
  const theme = useTheme();

  return (
    <Stack spacing={1}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
        }}
      >
        {data.header}
      </Typography>

      {data.children.map((list) => (
        <Stack
          key={list.title}
          component={Paper}
          spacing={1}
          elevation={0}
          sx={{
            p: theme.spacing(1.5),
            backgroundImage: 'none',
          }}
        >
          <Typography
            component="span"
            variant="caption"
            sx={{
              m: 0,
              color: alpha(theme.palette.common.black, 0.38),
            }}
          >
            {list.caption}
          </Typography>

          <Stack direction="row" alignItems="center">
            <StyledBox type={list.type}>
              {list.type.toLocaleUpperCase()}
            </StyledBox>

            <Box
              component="span"
              sx={{
                flexGrow: 1,
                '& > strong': {
                  color: theme.palette.error.main,
                },
              }}
              dangerouslySetInnerHTML={{ __html: list.path }}
            />
          </Stack>

          {!!list.note && (
            <Typography
              component="span"
              variant="caption"
              sx={{
                m: 0,
                color: theme.palette.warning.main,
              }}
            >
              <strong>Note:</strong> {list.note}
            </Typography>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
