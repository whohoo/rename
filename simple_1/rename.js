//通过require()方法引用Node.js两个库
var fs = require('fs');
var path = require('path');

//把DESTINATION_FOLDER目录下的文件按要求重命名
const DESTINATION_FOLDER = "./";//"./"表示当前目录， 如果要指定子目录，可以这样写"./subfolder"

const NEW_FILENAME = "new-filename_";//要把DESTINATION_FOLDER目录下的文件名改为, 定义你想要的文件名

try{
    //得到DESTINATION_FOLDER目录下的所有文件
    var fileArray = fs.readdirSync(DESTINATION_FOLDER);
}catch(err){//如果目录不存在，则会抛出异常错误
    console.error(err.message);
}


//如果fs.readdirSync方法没有抛出异常报错，
if(fileArray!=null){
    //循环DESTINATION_FOLDER目录下所有文件
    fileArray.forEach((file, index)=>{
        var absolutePath  = path.resolve(DESTINATION_FOLDER, file);//得到DESTINATION_FOLDER目录下文件的绝对路径
        if(absolutePath==__filename) return;//不包括rename.js文件, __filename变量名是系统定义的，其值就是当前执行的JS文件， 也就是"rename.js"
        var ext = path.extname(absolutePath);//获取文件后缀名
        var newPath = path.resolve(DESTINATION_FOLDER, NEW_FILENAME + index);//输出的新文件名+序号
        fs.renameSync(absolutePath, newPath + ext);
        console.log(`${absolutePath} ==> ${newPath + ext}`);
    });
    console.log("Rename Done!");
}
