"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const port = process.env.PORT || 3001;
const videos = [
    { id: 1, title: 'About JS - 01', author: 'it-incubator.eu' },
    { id: 2, title: 'About JS - 02', author: 'it-incubator.eu' },
    { id: 3, title: 'About JS - 03', author: 'it-incubator.eu' },
    { id: 4, title: 'About JS - 04', author: 'it-incubator.eu' },
    { id: 5, title: 'About JS - 05', author: 'it-incubator.eu' },
];
app.get('/', (req, res) => {
    let helloMessage = 'Hello World!!';
    res.send(helloMessage);
});
app.get('/videos', (req, res) => {
    res.send(videos);
});
app.get('/videos/:videoId', (req, res) => {
    const id = +req.params.videoId;
    const video = videos.find(v => v.id === id);
    if (!video) {
        res.sendStatus(404);
    }
    else {
        // res.send(video)
        res.json(video);
    }
});
app.post('/videos', (req, res) => {
    const newVideo = {
        id: (+new Date()),
        title: req.body.title,
        author: 'I\'m',
    };
    videos.push(newVideo);
    res.send(newVideo);
});
app.delete('/videos/:videoId', (req, res) => {
    const id = +req.params.videoId;
    const index = videos.findIndex(v => v.id === id);
    if (index === -1) {
        res.sendStatus(404);
    }
    else {
        videos.splice(index, 1);
        res.sendStatus(204);
    }
});
app.put('/videos/:videoId', (req, res) => {
    const id = +req.params.videoId;
    const video = videos.find(v => v.id === id);
    if (!video) {
        res.sendStatus(404);
    }
    else {
        video.title = req.body.title;
        res.sendStatus(204);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
