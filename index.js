import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import {ServerRenderingRouter} from 'server/router';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(cookieParser());

server.use(express.static(path.resolve('./dist')));
server.use('/static', express.static(path.resolve('./static')));
server.use('/music', express.static(path.resolve('./music/')));

server.use('/', ServerRenderingRouter);

server.use((req, res, next) => {
   let err = new Error('No found!');
   err.status = 404;
   next(err);
});

server.use((err, req, res, next) => {
   res.end(err.toString());
});

server.listen(3000, function () {
   console.log("start server 3000 !!!");
});