# iso-3166-2.js

Lookup information about ISO-3166-2 subdivisions.

[![browser support](https://ci.testling.com/olahol/iso-3166-2.js.png)
](https://ci.testling.com/olahol/iso-3166-2.js)

## Country code format

The country codes in the data are in the ISO 3166-1 alpha 2 format (US,
SE ...), but there is a conversion table that makes possible to input
alpha 3 codes (USA, SWE ...) to the `subdivision` and `country` functions.

https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3

## Examples

```js
> iso3166.subdivision("SE-O");

{ type: 'County',
  name: 'Västra Götalands län',
  countryName: 'Sweden',
  countryCode: 'SE',
  regionCode: 'O',
  code: 'SE-O' }
```

```js
> iso3166.subdivision("SE", "O");

{ type: 'County',
  name: 'Västra Götalands län',
  countryName: 'Sweden',
  countryCode: 'SE',
  regionCode: 'O',
  code: 'SE-O' }
```

```js
> iso3166.subdivision("USA", "Indiana");

{ type: 'state',
  name: 'Indiana',
  countryName: 'United States',
  countryCode: 'US',
  regionCode: 'IN',
  code: 'US-IN' }
```

## Functions

### iso3166.subdivision(code)
Retrieves a subdivision by its full code, ex "SE-O", "US-IN".

* * *

### iso3166.subdivision(country code, subdivision code)
Retrieves a subdivision by its country code and subdivision code,
ex ("SWE", "O").

* * *

### iso3166.subdivision(country code, subdivision name)
Retrieves a subdivision by its country code and subdivision name,
ex ("US", "Indiana").

* * *

### iso3166.country(country code)
Retrieves a country by its code, ex "US", "SE", "SWE".

* * *

### iso3166.data

The raw ISO 3166-2 data, the layout is:

```js
{
  country code (alpha 2): {
    name: country name, ex Sweden, United States ...
    sub: {
      subdivision code: {
        type: subdivision type, ex county, divison ...
        name: subdivision name, ex Västra Götaland, Indiana
      }
    }
  }
}
```

* * *

### iso3166.codes

The ISO 3166-1 alpha 3 to alpha 2 conversion table, the layout is:

```js
{
  country code (alpha 3): country code (alpha 2)
}
```

## Benchmarks

The filesize of the minified iso3166.js is `228Kb`.

```
$ matcha -R plain
iso3166-2
  #country(alpha 2) .............................. 1,597,632 op/s
  #country(alpha 3) .............................. 1,220,571 op/s
  #subdivision(alpha 2, code) .................... 1,332,394 op/s
  #subdivision(alpha 3, code) .................... 1,325,290 op/s
  #subdivision(alpha 2, name) .................... 1,352,375 op/s
  #subdivision(alpha 3, name) .................... 1,211,155 op/s
  #subdivision(alpha 2-code) ..................... 1,387,228 op/s
  #subdivision(alpha 3-code) ..................... 1,358,836 op/s
  #subdivision(alpha 2-name) ..................... 697,610 op/s
  #subdivision(alpha 3-name) ..................... 677,438 op/s

Suites:  1
Benches: 10
Elapsed: 14,535.80 ms
```

## See Also

* https://github.com/oodavid/iso-3166-2
* https://www.npmjs.org/package/country-list
* https://www.npmjs.org/package/i18n-iso-countries
