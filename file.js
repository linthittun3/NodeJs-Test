const fs = require('fs');


// //read
// fs.readFile('./docs/helo1234.txt',(err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString());
// });

// write

// if(!fs.existsSync('./docs/helo1234.txt')){
//     fs.writeFile('./docs/helo1234.txt','Hello World123',(err, data)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("After writing file");
//     })
// }else {
//     //delete
//     fs.unlink('./docs/helo1234.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted!");
//     })
// }
if(fs.existsSync('./newfolder')){
    // folder deleted
    fs.rmdir('./newfolder',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted!");
    })
}else{
    // folder created
    fs.mkdir('./newfolder', (err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder created");
    })
}



