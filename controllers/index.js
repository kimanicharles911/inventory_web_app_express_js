exports.index = function(req, res, next){
  res.render("index", {title: 'Dring Electronics'});
}
exports.show_phones_accessories = function(req, res, next){
  res.render("phones_accessories", { title: "Phones & Accessories" });
}
exports.show_computers_laptops = function(req, res, next){
  res.render("computers_laptops", {title: "Computers & Laptops"});
}
exports.show_household_appliances = function(req, res, next){
  res.render("household_appliances", {title: "Household Appliances"});
}
exports.show_beauty_shop_electronics = function(req, res, next){
  res.render("beauty_shop_electronics", {title: "Beauty Shop Electronics"});
}