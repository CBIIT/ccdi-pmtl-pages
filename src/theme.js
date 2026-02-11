import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  // Minimal theme additions to satisfy existing components.
  header: {
    height: '64px',
  },
  Drawer: {
    paper: {},
  },
});

export default theme;
