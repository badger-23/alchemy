const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');
// const fetch = require('node-fetch');

module.exports = class OrderService {
  static async createOrder(value) {
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${value.quantity}`
    );

    const order = await Order.insert(value);

    // example of making an API request:
    // const res = await fetch(
    //   `http://futuramaapi.herokuapp.com/api/quotes?search=${value}`
    // );
    // const quote = await res.json();

    // const order = await Order.insert({ value, quote });

    return order;
  }
};
