# iso-3166-2.js

Lookup information about ISO-3166-2 subdivisions.

## Example

```js
> iso3166.subdivision("SE-O");

{ type: 'County',
  name: 'Västra Götalands län',
  countryName: 'Sweden',
  countryCode: 'SE',
  code: 'SE-O' }
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
Retrieves a record matching `code`, if `code` is malformed or not found returns
an empty record.
