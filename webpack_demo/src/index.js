/**
 * npm i -D webpack webpack-cli
 * 
 * npm i -D 
 *  html-webpack-plugin
 *  clean-webpack-plugin
 *  style-loader css-loader
 *  less less-loader
 *  postcss-loader autoprefixer  
 *  mini-css-extract-plugin
 *  file-loader url-loader
 *  babel-loader @babel/preset-env @babel/core
 *  @babel/polyfill
 */

import style from './style.css'
import index from './index.less'

import pic from './1.png'

let oImg = new Image();
oImg.src = pic;

function b () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    })
  })
}

console.log([1,2,3].map(item => item*2));

async function a () {
  console.log(2)
  let res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    })
  });
  console.log(4)
  console.log(res)
}
console.log(1)
a();
console.log(3)

document.body.appendChild(oImg)

console.log(pic);

