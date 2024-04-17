import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import theme from '@/styles/theme';
import {RouterProvider} from 'react-router-dom';
import {router} from '@constants/router.config';
import {Provider} from 'react-redux';
import store from '@store/store';
import '@/styles/index.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
