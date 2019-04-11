// package
var dirListFile=require('dir-list-file');

// app
(async ()=>{

  // debug
  console.log('Start!');

  // exemple
  let files=dirListFile('/data');

  // console
  console.log(files);

  // debug
  console.log('Finish!');

})();
