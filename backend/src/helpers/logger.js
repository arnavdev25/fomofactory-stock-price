const { format, createLogger, transports } = require("winston");
const { combine, timestamp, label, printf } = format;
require("winston-daily-rotate-file");
const rTracer = require('cls-rtracer')
const { logger_config } = require("../config/config")
const app_constants = require(__dirname + "./../constants/app.json");


const customFormat = printf(({ level, message, label, timestamp }) => {
    const rid = rTracer.id()
    return rid ? `${timestamp} [request-id:${rid}] || ${level}: ${message} \n` + `.`.repeat(150) : `${timestamp}: ${message} \n` + `.`.repeat(150)
});


const fileRotateTransport = new transports.DailyRotateFile({
    filename: logger_config.filename,
    datePattern: logger_config.datePattern,
    frequency: logger_config.frequency,
    maxSize: logger_config.maxSize,
    maxFiles: logger_config.maxFiles,
    dirname: logger_config.dirname,
});


const logger = createLogger({
    level: "debug",
    format: combine(timestamp(), customFormat),
    transports: [fileRotateTransport],
});


const errorLogger = async (ex, data = null, res) => {
    if (ex) {
        let path = ex.stack ? ex.stack.split('\n')[1].match(/\((.*)\)/) : null;
        path = path ? path[1] : 'Unknown path';
        logger.error(JSON.stringify({ msg: ex.message + ' at ' + path, data }));
    }

    if (res) {
        res.json({ success: 0, status_code: app_constants.INTERNAL_SERVER_ERROR, message: "Exception Occurred" });
    }
}


module.exports = errorLogger;