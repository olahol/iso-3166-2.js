/*global data*/
/*
iso3166 API

The layout of data is:

{
  country code: {
    name: country name, ex Sweden, United States ...
    sub: {
      subdivision code: {
        type: subdivision type, ex county, division ...
        name: subdivision name, ex Västra Götaland, Indiana
      }
    }
  }
}
*/

var functions = {
  subdivision: function (country, code) {
    // If `code` is undefined assume that the full code is in `country`
    if (typeof code === "undefined") {
      // our iso-3166-2 data is in upper case.
      code = country.trim().toUpperCase();

      var parts = code.split("-");

      // A full subdivision code must have exactly two parts.
      if (parts.length !== 2) {
        return {};
      }

      country = parts[0];
      code = parts[1];
    }

    var subCode = country + "-" + code;

    // This country code does not exist in our data set.
    if (!(country in data)) {
      return {};
    }

    // All of a countries subdivisions.
    var subs = data[country].sub;

    var record = subs[subCode];

    // If we could not find the subdivision by its code try testing
    // subdivision names.
    if (typeof record === "undefined") {
      for (var key in subs) {
        if (subs.hasOwnProperty(key) &&
            subs[key].name.toUpperCase() === code.toUpperCase()) {
          record = subs[key];
          subCode = key;
          break;
        }
      }

      // If we still couldn't find it return empty record.
      if (typeof record === "undefined") {
        return {};
      }
    }

    // Add some useful data.
    record.countryName = data[country].name;
    record.countryCode = country;
    record.code = subCode;

    return record;
  },

  // Get a country and all its subdivision by its code.
  country: function (code) {
    code = code.trim().toUpperCase();

    if (!(code in data)) {
      return {};
    }

    var record = data[code];
    record.code = code;

    return record;
  },

  // Raw data.
  data: data
};

if (typeof module === "object" && module !== null) {
  module.exports = functions;
} else {
  window.iso3166 = functions;
}
