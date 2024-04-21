import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'Arial', 'sans-serif'].join(','),
    fontSize: 16
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 14
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: 14
        }
      }
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          fontSize: 14
        }
      }
    },
    MuiMenuItem: {
      defaultProps: {
        sx: {
          fontSize: 14
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 12
        }
      }
    }
  }
});

export default theme;
