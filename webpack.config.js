
const path = require('path');
module.exports={
    mode: "development",
    entry: './src/app.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "output.js"

    },
    //Loadar
    module:{
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                {
                  loader: "sass-loader",
                  options: {
                    // Prefer `dart-sass`
                    implementation: require("sass"),
                    includePaths: ["src/*.scss", "dist/css"],
                  },
                },
              ],
            },
          ]
    },
    //Loadar
    devServer: {
        static: {
          directory: path.join(__dirname, "dist")
        },
    
        compress: true,
        port: 3010, // default 8000
      },

}