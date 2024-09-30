import { CommonAddress, getAddressClass, Models } from '../src';

describe('getAddressClass', () => {
  it('should return SouthAfricaAddress for "SouthAfrica"', () => {
    expect(getAddressClass('SouthAfrica')).toBe(Models.SouthAfricaAddress);
  });

  it('should return IndiaAddress for "India"', () => {
    expect(getAddressClass('India')).toBe(Models.IndiaAddress);
  });

  it('should return CommonAddress for an unknown country', () => {
    expect(getAddressClass('Unknown')).toBe(CommonAddress);
  });

  it('should return correct address class for other countries', () => {
    expect(getAddressClass('UnitedStates')).toBe(Models.UnitedStatesAddress);
    expect(getAddressClass('UnitedKingdom')).toBe(Models.UnitedKingdomAddress);
    expect(getAddressClass('Australia')).toBe(Models.AustraliaAddress);
  });
});
