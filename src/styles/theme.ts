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
          fontSize: 11
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          color: '#fff',
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          '& > :not(style) ~ :not(style)': {
            marginLeft: 0
          }
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  }
});

export default theme;
