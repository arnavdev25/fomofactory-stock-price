const app_constants = require(__dirname + './../constants/app.json');
const Stock = require('../schemas/stockSchema.js');
const config = require(__dirname + '/../config/config.js');
const app_helper = require(__dirname + './../helpers/app.js')


exports.addStockDetails = async () => {
    const stock_list = config.stock_list;

    for (let symbol of stock_list) {
        const get_stock_data = await getStockData({ symbol })   // get stocks price
        const price = get_stock_data['Global Quote']['05. price'];
        Stock.create({ symbol, price })  // insert the data into db
    }
}


const getStockData = async (data) => {
    data.apikey = config.stock_api_key;
    data.function = 'GLOBAL_QUOTE'

    let options = {
        'method': 'GET',
        'url': config.stock_api_url + '?' + new URLSearchParams(data),
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': ''
        }
    }

    let result = await app_helper.request(options)
    return result
}


exports.getStockPrices = async (data) => {
    const { symbol } = data;

    const result = await Stock.aggregate([
        { $match: { symbol } },
        { $sort: { updated_at: -1 } },
        { $limit: 20 },
        {
            $project:{
                symbol:1,
                price:1,
                updated_at: { $dateToString: { format: "%d-%m-%Y %H:%M:%S", date: { $toDate: "$updated_at" }, timezone: "Asia/Kolkata" } },
            }
        }
    ]);

    if (result) {
        return { success: 1, status_code: app_constants.SUCCESS_OK, message: "Stock Prices has been fetch successfully!", result };
    }

    return { success: 0, status_code: app_constants.INTERNAL_SERVER_ERROR, message: "Something went wrong!!", result: {} };
};