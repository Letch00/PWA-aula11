import { io } from "socket.io-client";

//Create socket
const socket = io();

export const initSocket = () => {
    console.log("Inicializando socket..");

    //Check if is connected
    if (socket.connected) {
        console.log("Estou conectado");
    } else {
        console.log("Tentando criar..");
    }

    //Listen for events
    socket.on('connect', () => {
        console.log('Conectado ao servidor:', socket.id);
    });

    socket.on('disconnected', () => {
        console.log('Desconectado do servidor');
    });

    return socket;
};

export const socketAddListener = (listener = "", callback = () => { }) => {
    socket.on(listener, callback);
};

export const socketRemoveListener = (listener = "", callback = () => { }) => {
    socket.off(listener, callback)
};