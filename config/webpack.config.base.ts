import * as path from 'path'
import * as webpack from 'webpack'

const PROJECT_NAME = 'react-text-truncate'
const PROJECT_DIRECTORY = path.resolve(__dirname, '..')
const SRC_DIRECTORY = path.resolve(PROJECT_DIRECTORY, 'src')
const DIST_DIRECTORY = path.resolve(PROJECT_DIRECTORY, 'lib')

const config = (env): webpack.Configuration => ({
  entry: [path.resolve(SRC_DIRECTORY, 'index.ts')],
  output: {
    path: path.resolve(DIST_DIRECTORY),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDom',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(PROJECT_DIRECTORY, 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },
  plugins: [
    new webpack.EnvironmentPlugin(env),
  ],
})

export { config as default, PROJECT_DIRECTORY, SRC_DIRECTORY, DIST_DIRECTORY, PROJECT_NAME }
