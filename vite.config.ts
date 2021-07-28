import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ command }) => {
  const mockzendconfig = {
    path: 'mocks'
  }
  return {
    plugins: [
      vue()
    ],
    server:{
      host:'0.0.0.0',
      port: 3030
    },
  };
};


