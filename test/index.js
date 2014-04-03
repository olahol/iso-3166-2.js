var assert = require("assert")
  , iso3166 = require("../iso3166.min");

describe("#country()", function(){
  it("should get Sweden", function () {
    var country = iso3166.country("SE");
    assert.equal(country.code, "SE");
    assert.equal(country.name, "Sweden");
  });

  it("should get Sweden", function () {
    var country = iso3166.country("SWE");
    assert.equal(country.code, "SE");
    assert.equal(country.name, "Sweden");
  });
});

describe("#subdivison()", function(){
  it("should get a Västra Götaland", function () {
    var sub = iso3166.subdivision("SE-O");
    assert.equal(sub.countryCode, "SE");
    assert.equal(sub.countryName, "Sweden");
    assert.equal(sub.code, "SE-O");
    assert.equal(sub.regionCode, "O");
    assert.equal(sub.name, "Västra Götalands län");
  });

  it("should get a Västra Götaland", function () {
    var sub = iso3166.subdivision("SE", "O");
    assert.equal(sub.countryCode, "SE");
    assert.equal(sub.countryName, "Sweden");
    assert.equal(sub.code, "SE-O");
    assert.equal(sub.regionCode, "O");
    assert.equal(sub.name, "Västra Götalands län");
  });

  it("should get a Indiana", function () {
    var sub = iso3166.subdivision("US-IN");
    assert.equal(sub.countryCode, "US");
    assert.equal(sub.countryName, "United States");
    assert.equal(sub.code, "US-IN");
    assert.equal(sub.regionCode, "IN");
    assert.equal(sub.name, "Indiana");
  });

  it("should get a Indiana", function () {
    var sub = iso3166.subdivision("US", "IN");
    assert.equal(sub.countryCode, "US");
    assert.equal(sub.countryName, "United States");
    assert.equal(sub.code, "US-IN");
    assert.equal(sub.regionCode, "IN");
    assert.equal(sub.name, "Indiana");
  });

  it("should get a Indiana", function () {
    var sub = iso3166.subdivision("US-Indiana");
    assert.equal(sub.countryCode, "US");
    assert.equal(sub.countryName, "United States");
    assert.equal(sub.code, "US-IN");
    assert.equal(sub.regionCode, "IN");
    assert.equal(sub.name, "Indiana");
  });

  it("should get a Indiana", function () {
    var sub = iso3166.subdivision("US", "Indiana");
    assert.equal(sub.countryCode, "US");
    assert.equal(sub.countryName, "United States");
    assert.equal(sub.code, "US-IN");
    assert.equal(sub.regionCode, "IN");
    assert.equal(sub.name, "Indiana");
  });

  it("should get a Indiana", function () {
    var sub = iso3166.subdivision("USA", "Indiana");
    assert.equal(sub.countryCode, "US");
    assert.equal(sub.countryName, "United States");
    assert.equal(sub.code, "US-IN");
    assert.equal(sub.regionCode, "IN");
    assert.equal(sub.name, "Indiana");
  });

  it("should get a Västra Götaland", function () {
    var sub = iso3166.subdivision("SWE-O");
    assert.equal(sub.countryCode, "SE");
    assert.equal(sub.countryName, "Sweden");
    assert.equal(sub.code, "SE-O");
    assert.equal(sub.regionCode, "O");
    assert.equal(sub.name, "Västra Götalands län");
  });
});
