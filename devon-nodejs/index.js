// console.log('hello world');

// globalThis.luckyNum = '23';
// console.log(globalThis.luckyNum);

// console.log(process.env.HOME);

// // callback 
// process.on('exit', function() {
    
// })

// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', ()=> {
//     console.log('yum');

// })
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');


// const { readFile, readFileSync } =  require('fs')

// // read file
// const txt = readFileSync('./hello.txt', 'utf-8')

// // read file callback
// readFile('./hello.txt', 'utf-8' , (err,txt) =>{
//     console.log(txt)
// });

//console.log('do this ASAP')

const { readFile } = require('fs').promises;

async function hello() {
    const file = await readFile('./hello.txt', 'utf=8');
}

const myModule = require('./my-module');

console.log(myModule);

const express = require('express');
const { request } = require('http');
const { response } = require('express');
const app = express();
app.get('/foo/bar', (request, response)=> {

    readFile('./home.html', 'utf-8', (err, html) => {
        if (err) {
            response.status(500).send('sorry out of order')
        }
        response.send(html);
    })
} );

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))