# iso-3166-2.js

Lookup information about ISO-3166-2 subdivisions.

## Examples

```js
> iso3166.subdivision("SE-O");

{ type: 'County',
  name: 'Västra Götalands län',
  countryName: 'Sweden',
  countryCode: 'SE',
  code: 'SE-O' }
```

```js
> iso3166.subdivision("SE", "O");

{ type: 'County',
  name: 'Västra Götalands län',
  countryName: 'Sweden',
  countryCode: 'SE',
  code: 'SE-O' }
```

```js
> iso3166.subdivision("US", "Indiana");

{ type: 'state',
  name: 'Indiana',
  countryName: 'United States',
  countryCode: 'US',
  code: 'US-IN' }
```

## Data

A subdivision record has the following fields.

```js
{
  name // Name of subdivision
  type // County, state etc..
  countryCode // Country code of country the subdivision belongs to.
  countryName // Country name of country the subdivision belongs to.
  code // Subdivision code
}
```

## Functions

### iso3166.subdivision(code)
Retrieves a subdivision by its full code, ex "SE-O", "US-IN".

* * *

### iso3166.subdivision(country code, subdivision code)
Retrieves a subdivision by its country code and subdivision code,
ex ("SE", "O").

* * *

### iso3166.subdivision(country code, subdivision name)
Retrieves a subdivision by its country code and subdivision name,
ex ("US", "Indiana").

* * *

### iso3166.country(country code)
Retrieves a country by its code, ex "US", "SE".

* * *

### iso3166.data

The raw iso3166-2 data, the layout of the data is:

```js
{
  country code: {
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
