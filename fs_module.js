//An example of destrucuring -- this is used to only extract the data that you need rather than the whole array or object
const songs = {
  arin_ray:['reckless', 'communication','came up missin'],
  adele: ['rolling in the deep', 'set fire to the rain', 'hello'],
  chris_brown:['lottery','transform ya', 'yeah 3x']
}

const {arin_ray, adele, chris_brown} = songs

console.log(arin_ray)
// -------------------------------------------------------------------------------
//const {readFileSync} = require('fs');
/* the above code is equivalent to:
const fs = require('fs')
fs.readFileSync */

//this program reads files and outputs their contents to the console
/*const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first,second)
*/
// this program also reads the contents of a file but also writes the content to either another existing file
// or creates a new file if it can't find the specified one
const {readFileSync, writeFileSync} = require('fs')

const firstFile = readFileSync('./content/first.txt', 'utf8')
const secondFile = readFileSync('./content/second.txt', 'utf8')

//if the specified file 'result-sync.txt' isn't there, node will create one
//if the file is there, node will override everything there with the new text
// flag 'a' appends the text rather than overriding it
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${firstFile}, ${secondFile}`,
  {flag: 'a'}
)

//callback function practice
//this program emulates a camera...the click should not sound unless button is pressed
let shutter = true
const camera = (callback,pressed) => {
  console.log('=0=')
  if (pressed == true){
    callback()
    setTimeout(function(){console.log('whirr....whirr')}, 3000)
  }

}
const click = () => {
  console.log('>CLICK<')
}
camera(click,shutter)
