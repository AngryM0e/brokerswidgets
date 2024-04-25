export function devServerWebpack(port: number) {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
