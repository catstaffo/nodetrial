const {readFile, writeFile} = require('fs');

/* Not line by line task!!! We start a task then offload the task and proceed with the next right away */

/* MUST PROVIDE UTF CODING, OR ELSE YOU GET BUFFER
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
}) */

//This lets me see just first text file
/* readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result)
})*/

// Result: undefined
// Yet: result in result-async
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result)=> {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    })
});
console.log('starting next task');

