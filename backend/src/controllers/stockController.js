require(__dirname + "../../helpers/validate");
const stockModel = require("../models/stockModel");
const validate = new Validate();
const errorLogger = require("../helpers/logger")


exports.addStockDetails = async () => {
    try {
        await stockModel.addStockDetails();
        console.log(`stock data added to db at ${new Date()}`);
    }

    catch (ex) {
        errorLogger(ex);
    }
};


exports.getStockPrices = async (req, res) => {
    try {
        let validataion = await validate.validate(req.query, {
            symbol: "required"
        });

        if (validataion.hasError) {
            let response = { success: 0, error: validataion.errors };
            res.status(400);
            return res.send(response);
        }

        let get_stock_list = await stockModel.getStockPrices(req.query);
        return res.json(get_stock_list);
    }

    catch (ex) {
        errorLogger(ex, req.query, res);
    }
};