# iso-3166-2.js

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Download Count][downloads-image]][downloads-url]

> Lookup information about ISO-3166-2 subdivisions.

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

[npm-image]: https://img.shields.io/npm/v/iso-3166-2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/iso-3166-2
[downloads-image]: http://img.shields.io/npm/dm/iso-3166-2.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/iso-3166-2
[travis-image]: https://img.shields.io/travis/olahol/iso-3166-2.js/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/olahol/iso-3166-2.js
