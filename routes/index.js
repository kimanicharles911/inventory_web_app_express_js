var express = require('express');
var router = express.Router();
let index = require("../controllers/index");
router.get('/', index.index);
router.get("/phones_accessories", index.show_phones_accessories);
router.get("/computers_laptops", index.show_computers_laptops);
router.get("/household_appliances", index.show_household_appliances);
router.get("/beauty_shop_electronics", index.show_beauty_shop_electronics);
module.exports = router;
