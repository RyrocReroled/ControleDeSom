module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ControleDeSom/'
    : '/',

    // Opcional: remove source maps para produção (deixa o build mais leve)
  productionSourceMap: false,
  
  // Opcional: se tiver problemas com arquivos estáticos
  assetsDir: 'static'
}

