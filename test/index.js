var test = require("tape")
  , iso3166 = require("../iso3166.min");

test("country()", function (t) {
  t.plan(4);

  var country = iso3166.country("SE");
  t.equal(country.code, "SE");
  t.equal(country.name, "Sweden");

  country = iso3166.country("SWE");
  t.equal(country.code, "SE");
  t.equal(country.name, "Sweden");
});

test("subdivison()", function (t) {
  t.plan(45);

  var sub = iso3166.subdivision("SE-O");
  t.equal(sub.countryCode, "SE");
  t.equal(sub.countryName, "Sweden");
  t.equal(sub.code, "SE-O");
  t.equal(sub.regionCode, "O");
  t.equal(sub.name, "Västra Götalands län");

  sub = iso3166.subdivision("SE", "O");
  t.equal(sub.countryCode, "SE");
  t.equal(sub.countryName, "Sweden");
  t.equal(sub.code, "SE-O");
  t.equal(sub.regionCode, "O");
  t.equal(sub.name, "Västra Götalands län");

  sub = iso3166.subdivision("US-IN");
  t.equal(sub.countryCode, "US");
  t.equal(sub.countryName, "United States");
  t.equal(sub.code, "US-IN");
  t.equal(sub.regionCode, "IN");
  t.equal(sub.name, "Indiana");

  sub = iso3166.subdivision("US", "IN");
  t.equal(sub.countryCode, "US");
  t.equal(sub.countryName, "United States");
  t.equal(sub.code, "US-IN");
  t.equal(sub.regionCode, "IN");
  t.equal(sub.name, "Indiana");

  sub = iso3166.subdivision("US-Indiana");
  t.equal(sub.countryCode, "US");
  t.equal(sub.countryName, "United States");
  t.equal(sub.code, "US-IN");
  t.equal(sub.regionCode, "IN");
  t.equal(sub.name, "Indiana");

  sub = iso3166.subdivision("US", "Indiana");
  t.equal(sub.countryCode, "US");
  t.equal(sub.countryName, "United States");
  t.equal(sub.code, "US-IN");
  t.equal(sub.regionCode, "IN");
  t.equal(sub.name, "Indiana");

  sub = iso3166.subdivision("USA", "Indiana");
  t.equal(sub.countryCode, "US");
  t.equal(sub.countryName, "United States");
  t.equal(sub.code, "US-IN");
  t.equal(sub.regionCode, "IN");
  t.equal(sub.name, "Indiana");

  sub = iso3166.subdivision("SWE-O");
  t.equal(sub.countryCode, "SE");
  t.equal(sub.countryName, "Sweden");
  t.equal(sub.code, "SE-O");
  t.equal(sub.regionCode, "O");
  t.equal(sub.name, "Västra Götalands län");

  sub = iso3166.subdivision("USA-Indiana");
  t.equal(sub.countryCode, "US");
  t.equal(sub.countryName, "United States");
  t.equal(sub.code, "US-IN");
  t.equal(sub.regionCode, "IN");
  t.equal(sub.name, "Indiana");
});
