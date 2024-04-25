import path from 'path';
import { buildWebpack } from './config/webpack/build.webpack';
import {
  BuildEnv,
  ModeOptions,
} from './config/webpack/interfaces/config.interface';

export default (env: BuildEnv) => {
  const MODE: ModeOptions = env.mode || 'development';
  const PORT = env.port || 3000;

  return buildWebpack({
    mode: MODE,
    port: PORT,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
  });
};
