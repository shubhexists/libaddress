# libaddress-validator

## Overview

`libaddress-validator` is a robust TypeScript/JavaScript library designed for handling addresses across multiple countries. It provides a flexible and extensible system to work with country-specific address formats while maintaining a common interface.

## Features

- Custom Address Support for all major countries
- A good enough fallback for other countries
- Extensible architecture allowing easy addition of new country formats.
- Common interface for all address types.
- TypeScript support for enhanced type safety and developer experience.

## Installation

```bash
npm install libaddress-validator
```

## Usage

### Basic Usage

```typescript
import { getAddressClass } from 'libaddress-validator';

const SouthAfricaAddress = getAddressClass('SouthAfrica');

try {
  const address = new SouthAfricaAddress({
    fullName: 'John Doe',
    mobileNumber: '+27123456789',
    streetNumber: '123',
    city: 'Cape Town',
    area: 'City Bowl',
    stateProvinceRegion: 'Western Cape',
    postalCode: '8001',
    isDefault: true,
    extra: 'Apartment 4B'
  });

  console.log(address);
} catch (error) {
  console.error('Invalid address:', error.message);
}
```

### Working with Different Countries

```typescript
import { getAddressClass, CountryCode } from 'libaddress-validator';

function createAddress(country: CountryCode, addressData: any) {
  const AddressClass = getAddressClass(country);
  return new AddressClass(addressData);
}

// Create a US address
const usAddress = createAddress('UnitedStates', {
  fullName: 'Jane Smith',
  streetAddress1: '123 Main St',
  city: 'New York',
  state: 'NY',
  postalCode: '10001',
  // ... other required fields
});

// Create a UK address
const ukAddress = createAddress('UnitedKingdom', {
  fullName: 'John Brown',
  addressLine1: '10 Downing Street',
  city: 'London',
  postalCode: 'SW1A 2AA',
  // ... other required fields
});
```

## API Reference

### `getAddressClass(countryCode: CountryCode)`

Returns the appropriate address class for the given country code. If no specific class is found, it returns the `CommonAddress` class.

#### Parameters
- `countryCode`: A string literal type representing supported countries (e.g., 'UnitedStates', 'UnitedKingdom', 'SouthAfrica')

#### Returns
A constructor for the country-specific Address class.

### Country-specific Address Classes

Each supported country has its own address class (e.g., `SouthAfricaAddress`, `UnitedStatesAddress`) that extends the `BaseAddress` class. These classes include country-specific fields and built-in validation.

### `CountryCode` Type

A TypeScript type that represents all supported country codes. Use this for type-safe country code inputs.

## Error Handling

All address classes perform validation in their constructor. If the provided data is invalid, they will throw an error with a descriptive message. Always wrap address creation in a try-catch block to handle potential validation errors.

## Extending the Library

To add support for a new country:

1. Create a new class extending `BaseAddress` with country-specific fields and validation.
2. Add the new country to the `CountryCode` type.
3. Update the `country_map` in the main module to include the new country and its corresponding address class.

## Contributing

Contributions are welcome! Please read our contributing guidelines for details on how to submit pull requests, report issues, or request features.

## Testing

To run the test suite:

```bash
npm test
```

For watching mode:

```bash
npm test -- --watch
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any problems or have any questions, please open an issue on our GitHub repository.