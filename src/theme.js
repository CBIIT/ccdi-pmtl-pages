import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3489ca',
    },
  },
  // Minimal theme additions to satisfy existing components.
  header: {
    height: '64px',
  },
  Drawer: {
    paper: {},
  },
});

export default theme;
