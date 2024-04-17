import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@', replacement: path.resolve(__dirname, 'src')},
      {find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
      {find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts')},
      {find: '@components', replacement: path.resolve(__dirname, 'src/components')},
      {find: '@store', replacement: path.resolve(__dirname, 'src/store')},
      {find: '@constants', replacement: path.resolve(__dirname, 'src/constants')},
      {find: '@services', replacement: path.resolve(__dirname, 'src/services')}
    ]
  }
});
