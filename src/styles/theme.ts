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
        // root: {
        //   color: '#fff',
        //   zIndex: 1000,
        //   backgroundColor: 'rgba(0, 0, 0, 0.3)'
        // }
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
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiCheckbox-root.Mui-checked': {
            color: '#6A983C'
          },
          '&.MuiButtonBase-root.MuiCheckbox-root': {
            padding: '2px',
            marginRight: '6px'
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '36px 44px'
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
    MuiRating: {
      defaultProps: {
        sx: {
          color: '#151515',
          fontSize: '20px'
        }
      }
    }
  }
});

export default theme;
