import winston from "winston";
import config from "config";

// Estipulando níveis de erros

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};

const level = () => {
    const env = config.get<string>("env") || "development";
    const isDevelopment = env === "development";
    return isDevelopment ? "debug" : "warn";
};

const colors = { 
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white"
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `${info.timestamp} - ${info.level}: ${info.message}`
    )
);

// Após definir a formatação da mensagem via Winston, é preciso especificar o arquivo de log de erro
const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: "logs/error.log",
        level: "error"
    }),
    new winston.transports.File({
        filename: "logs/warn.log",
        level: "warn"
    }),
    new winston.transports.File({
        filename: "logs/info.log",
        level: "info"
    }),
    new winston.transports.File({
        filename: "logs/http.log",
        level: "http"
    }),
    new winston.transports.File({
        filename: "logs/debug.log",
        level: "debug"
    }),
    new winston.transports.File({filename: "logs/all.log"})
];

const logger = winston.createLogger(
    {
        level: level(),
        levels,
        format,
        transports
    }
);

export default logger;