// loader：1.下载 2.使用（配置loader）
// plugins：1.下载 2.引入 3.使用

const { resolve } = require("path");
// 打包html资源需要用到的包
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { options } = require("less");

module.exports = {
  // webpack配置
  //入口起点
  entry: "./src/index.js",
  // 输出
  output: {
    // 输出文件名
    filename: "js/built.js",
    // 输出路径
    // __dirname表示当前文件所在路径
    path: resolve(__dirname, "build"),
  },
  // loader的配置
  module: {
    rules: [
      // 详细的loader配置
      // 不同的文件必须配置不同的loader来处理
      {
        // 匹配文件类型
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从上到下，依次执行
          // 创建style标签，将js中的样式资源插入到行，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载到js中，里边内容是样式字符串
          "css-loader",
        ],
      },
      {
        // 匹配文件类型,处理less文件
        test: /\.less$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从上到下，依次执行
          // 创建style标签，将js中的样式资源插入到行，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载到js中，里边内容是样式字符串
          "css-loader",
          // 将less文件编译成css文件
          "less-loader",
        ],
      },
      {
        // 处理图片资源，但是默认处理不了html中的图片资源
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader时不需要使用use数组
        loader: "url-loader", //需要下载url-loader，file-loader
        // 详细配置
        options: {
          // 此项配置表明当图片小于8kb时会被解析成base64位编码
          // 优点：减少请求次数，减轻服务器压力
          // 缺点：图片体积会更大（文件请求速度会变慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：图片被解析成[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          //[HASH:10]取图片的hash的前10位
          // [ext]取文件原来的扩展名
          name: "[hash:10].[ext]",
          //   设置输出的目录
          outputPath: "imgs",
        },
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片（负责引入img。从而能被url-loader进行处理）
        loader: "html-loader",
      },
      // 打包其他资源（除了html/css/js资源以外的资源）

      {
        // 排除css/js/html/less资源
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "media",
        },
      },
    ],
  },
  // plugins的配置
  plugins: [
    // 详细配置
    new HtmlWebpackPlugin({
      // html-webpack-plugin会默认创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
      // 需求；需要有结构的HTML文件

      // template会复制指定路径的文件，并自动引入打包输出的所有资源（JS/CSS）
      template: "./src/index.html",
    }),
  ],
  // 模式，development表示开发模式
  mode: "development",
  // 开发服务器devServer：用来自动化（自动编译）
  //特点：只会在内存中打包编译，不会有任何输出
  // 启动devServer指令为：npx webpack-dev-server
  // (需要下载webpack-dev-server包)
  devServer: {
    //项目构建路径
    contentBase: resolve(__dirname, "build"),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    //自动打开浏览器
    open: true,
  },
};
