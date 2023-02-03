"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
class ServerBootstrap {
    constructor() {
        this.app = (0, express_1.default)();
        this.httpServer = http_1.default.createServer(this.app);
        this.port = 8000;
        this.listen();
    }
    listen() {
        this.httpServer.listen(this.port, () => {
            console.log(`[server] listening ${this.port}`);
        });
    }
}
new ServerBootstrap();
