import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'
import * as path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, './src', ''))
  return {
    define: {
      __APP_ENV__: env.APP_ENV
    },
    plugins: [
      react(),
      viteEslint(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE
          }
        }
      }),
      viteCompression(),
      viteImagemin({
        // 无损压缩配置，无损压缩下图片质量不会变差
        optipng: {
          optimizationLevel: 7
        },
        // 有损压缩配置，有损压缩下图片质量可能会变差
        pngquant: {
          quality: [0.8, 0.9]
        },
        // svg 优化
        svgo: {
          plugins: [
            {
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
      })
    ],
    resolve: {
      // 别名配置，可以使用绝地路径引入src文件夹下面的文件
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8080/api/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      target: 'esnext'
    }
  }
})
