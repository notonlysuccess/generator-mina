import path from 'path'
import fs from 'fs'
import webpack from 'webpack'
import copyPlugin from 'copy-webpack-plugin'

const DEBUG = true;

const pageBase = '../src/pages'

let entrys = {}

// add page
let pages = fs.readdirSync(path.resolve(__dirname, pageBase))
pages.forEach(page => {
  var url = path.join(__dirname, pageBase, page)
  if (fs.statSync(url).isDirectory()) {
    entrys['pages/' + page + '/' + page] = path.join(url, page)
  }
})
entrys['app'] = path.join(__dirname, '../src/app')

let copyFiles = []
Object.keys(entrys).forEach(page => {
  ['wxss', 'wxml', 'json'].forEach(ext => {
    try {
      const fileName = entrys[page] + '.' + ext
      console.log(fileName)
      fs.statSync(fileName)
      copyFiles.push({from: fileName, to: `${page}.${ext}`})
    } catch (e) {}
  })
})

console.log('copyFiles', copyFiles)

console.log(entrys)

export default {
  entry: entrys,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },

  devtool: DEBUG ? 'source-map' : false,

  module: {
    loaders: [{
      test: /\.js$/,
      excludes: /node_modules/,
      loaders: ['babel']
    }]
  },
  resolve: {
    extendsions: ['', 'js']
  },
  plugins: [
    new copyPlugin(copyFiles)
  ]
}
