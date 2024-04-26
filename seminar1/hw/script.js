const http = require('http');
let count = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        count++;
        res.end(`<a href='/about'>About</a> <p>Посещений: ${count}</p>`)
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        count++;
        res.end(`<a href='/'">Main</a> <p>Посещений: ${count}</p>`)
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8'
        });
        res.end('<h1> Page not founded </h1>')
    }
});

const port = 3001;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
