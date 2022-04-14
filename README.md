# iban-parser

## Usage

```js
import IBAN from 'iban';
import { Country } from 'iban/lib/helpers/Country.js';

const ibanObj = new IBAN(Country.SK);
ibanObj.isValid('SK3112000000001987426375');
ibanObj.parse('SK59 1100 0000 0012 3456 7890');
```

## Structure

### type indications:

1. **n** - digits (numeric characters 0 to 9 only);
2. **a** - upper-case letters (alphabetic characters A-Z only); or
3. **c** - upper- and lower-case alphanumeric characters (A-Z, a-z and 0-9);
4. **e** - blank space.

### length indications:

1. **nn!** - fixed length;
2. **nn** - maximum length
