# NodeJS - Directory List Files

Install [dir-list-file](https://www.npmjs.com/package/dir-list-file)

```shell
npm i dir-list-file
```

### Script JS

```js
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
```

List all files in directory.
