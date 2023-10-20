// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const WooCommerceRestApi = require('@woocommerce/woocommerce-rest-api').default;

const api = new WooCommerceRestApi({
  url: process.env.WebsiteURL,
  consumerKey: process.env.WooCommerceConsumerKey,
  consumerSecret: process.env.WooCommerceConsumerSecret,
  version: process.env.WooCommerceAPIVersion,
});

const data = { regular_price: '8' };
const variation = ['1380'];

variation.forEach((item) => {
  api
    .put(`products/84/variations/${item}`, data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
});
