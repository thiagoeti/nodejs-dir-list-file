// function
var directory=function(folder, list){

  // list
  list=list || [];

  // module
  var fs=fs || require('fs');

  // files
	let files=fs.readdirSync(folder);

  // mount
  files.forEach(function(file){

    // check
    if(fs.statSync(folder+'/'+file).isDirectory()){
      // recoursive
      list=directory(folder+'/'+file, list);
    }else{
      // add
      list.push(folder+'/'+file);
    }

  });

  // return
  return list;
};

// export
module.exports=directory;
