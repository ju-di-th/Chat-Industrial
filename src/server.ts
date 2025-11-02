import express, { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';

class App{
    private app: Application;
    private http: http.Server;
    private io: Server;

    constructor(){
        this.app = express();
        this.http = http.createServer(this.app);
        this.io = new Server(this.http);
        this.listenSocket();
        this.setupRoutes();
    }
    listenServer(){
        this.http.listen(3000, ()=> console.log('server is running'));
    }
    listenSocket(){
        function randomEmoji() {
            const emojis = ['🐱', '🐶', '🐸', '🦊', '🐵', '🐼', '🐯', '🦁', '🐧', '🐨', '🐷'];
            return emojis[Math.floor(Math.random() * emojis.length)];
        }
        
        this.io.on('connection', (socket)=>{
            console.log('user connected =>', socket.id);

            socket.on('join', (name) => { //salvando o emoji e nome do usuário
                socket.data.username = `${randomEmoji()} ${name}`;
                console.log(`Usuário ${socket.data.username} conectado.`);
            });
            
            socket.on('message', (msg) => {
                const fullMessage = `${socket.data.username || 'Anônimo'}: ${msg}`;
                console.log('Mensagem:', fullMessage);
                this.io.emit('message', fullMessage);
            }); // . . .
        });
    }
    setupRoutes(){
        this.app.get('/', (req, res)=>{
            res.sendFile(path.join(__dirname,'index.html'));
        })
    }
}

const app = new App();

app.listenServer();
