"use strict"


module.exports = function () {
    return {
        env: 'localhost',
        node_port: 8080,
        mongodb: {
            'url': 'mongodb://localhost:27017',
            'host': 'localhost',
            'database': 'stock',
            'username': '',
            'password': '',
            'port': 27017
        },
        logger_config: {
            filename: 'logs-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            frequency: "1d",
            maxSize: '20m',
            maxFiles: '7',
            dirname: "src/_logs"
        },
        stock_list: ['BTC', 'AAPL', 'MSFT', 'NVDA', 'GOOG'],
        stock_api_url: 'https://www.alphavantage.co/query',
        stock_api_key: 'BH1FEWQDLNAP4VTQ'
    }
}();