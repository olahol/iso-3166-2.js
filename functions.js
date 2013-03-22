var functions = {
  subdivision: function (code) {
    code = code.trim().toUpperCase(); // our iso-3166-2 data is in upper case.

    var parts = code.split("-");

    if (parts.length !== 2) {
      return {};
    }

    var country = parts[0];

    if (!(country in data) || !(code in data[country]["sub"])) {
      return {};
    }

    var record = data[country]["sub"][code];
    record.countryName = data[country].name;
    record.countryCode = country;
    record.code = code;

    return record;
  },

  country: function (code) {
    code = code.trim().toUpperCase();

    if (!(code in data)) {
      return {};
    }

    var record = data[code];
    record.code = code;

    return record;
  }
};

if (typeof module === "object" && module !== null) {
  module.exports = functions;
} else {
  window.iso3166 = functions;
}
