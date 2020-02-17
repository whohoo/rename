//通过require()方法引用Node.js两个库
var fs = require('fs');
var path = require('path');

function createEmtpyFiles(filename, num){
    let dir = path.dirname(filename);
    if(fs.existsSync(dir)){
        for(let i=0;i<num;i++){
            fs.writeFileSync(filename.replace("%num%", i), '');
        }
        console.log(`共${num}个文件生成`);
    }else{
        console.log(`目录"${dir}"不存在.`);
    }
    
}

createEmtpyFiles("../simple_1/test_%num%.txt", 6);