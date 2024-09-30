import { CommonAddress, Models } from '../src';
import { CanadianProvinces, IndianStates, IrishCounties, JapanesePrefectures, USStates } from '../src/enums';

describe('SouthAfricaAddress', () => {
  const validAddressData = {
    fullName: 'John Doe',
    mobileNumber: '+27123456789',
    streetNumber: '123',
    city: 'Cape Town',
    area: 'City Bowl',
    stateProvinceRegion: 'Western Cape',
    postalCode: '8001',
    isDefault: true,
    extra: 'Apartment 4B',
  };

  it('should create a valid SouthAfricaAddress instance', () => {
    const address = new Models.SouthAfricaAddress(validAddressData);
    expect(address).toBeInstanceOf(Models.SouthAfricaAddress);
    expect(address.fullName).toBe('John Doe');
    expect(address.mobileNumber).toBe('+27123456789');
    expect(address.streetNumber).toBe('123');
    expect(address.city).toBe('Cape Town');
    expect(address.area).toBe('City Bowl');
    expect(address.stateProvinceRegion).toBe('Western Cape');
    expect(address.postalCode).toBe('8001');
    expect(address.isDefault).toBe(true);
    expect(address.extra).toBe('Apartment 4B');
  });

  it('should throw an error for invalid postal code', () => {
    const invalidData = { ...validAddressData, postalCode: '12345' };
    expect(() => new Models.SouthAfricaAddress(invalidData)).toThrow('Invalid postal code');
  });

  it('should throw an error for missing required fields', () => {
    const invalidData = { ...validAddressData, city: '' };
    expect(() => new Models.SouthAfricaAddress(invalidData)).toThrow('City is required');
  });
});

describe('AustraliaAddress', () => {
  const validAustraliaAddress = {
    fullName: 'John Doe',
    mobileNumber: '+61412345678',
    streetAddressPOBoxCompanyName: '123 Company St',
    apartmentSuiteUnitBuilding: 'Apt 4B',
    citySuburb: 'Sydney',
    stateTerritory: 'NSW',
    postalCode: '2000',
    isDefault: true,
    extra: 'Landmark near the park',
  };

  it('should create a valid AustraliaAddress instance', () => {
    const address = new Models.AustraliaAddress(validAustraliaAddress);
    expect(address).toBeInstanceOf(Models.AustraliaAddress);
    expect(address.fullName).toBe('John Doe');
    expect(address.mobileNumber).toBe('+61412345678');
    expect(address.streetAddressPOBoxCompanyName).toBe('123 Company St');
    expect(address.citySuburb).toBe('Sydney');
    expect(address.stateTerritory).toBe('NSW');
    expect(address.postalCode).toBe('2000');
    expect(address.isDefault).toBe(true);
    expect(address.extra).toBe('Landmark near the park');
  });

  it('should throw an error for an invalid postal code', () => {
    const invalidData = { ...validAustraliaAddress, postalCode: '99999' };
    expect(() => new Models.AustraliaAddress(invalidData)).toThrowError();
  });

  it('should throw an error for missing required fields', () => {
    const invalidData = { ...validAustraliaAddress, stateTerritory: '' };
    expect(() => new Models.AustraliaAddress(invalidData)).toThrowError();
  });
});

describe('AustriaAddress', () => {
  const validAustriaAddress = {
    fullName: 'Jane Doe',
    mobileNumber: '+43123456789',
    address: '123 Main St',
    plz: '1010',
    townCity: 'Vienna',
    isDefault: false,
    extra: 'Near the museum',
  };

  it('should create a valid AustriaAddress instance', () => {
    const address = new Models.AustriaAddress(validAustriaAddress);
    expect(address).toBeInstanceOf(Models.AustriaAddress);
    expect(address.fullName).toBe('Jane Doe');
    expect(address.mobileNumber).toBe('+43123456789');
    expect(address.address).toBe('123 Main St');
    expect(address.plz).toBe('1010');
    expect(address.townCity).toBe('Vienna');
    expect(address.isDefault).toBe(false);
    expect(address.extra).toBe('Near the museum');
  });

  it('should throw an error for an invalid postal code', () => {
    const invalidData = { ...validAustriaAddress, plz: 'ABCDE' };
    expect(() => new Models.AustriaAddress(invalidData)).toThrowError();
  });

  it('should throw an error for missing required fields', () => {
    const invalidData = { ...validAustriaAddress, address: '' };
    expect(() => new Models.AustriaAddress(invalidData)).toThrowError();
  });
});

describe('BelgiumAddress', () => {
  const validBelgiumAddress = {
    fullName: 'Pierre Dupont',
    mobileNumber: '+32412345678',
    streetNumberAvenue: '123 Avenue des Champs',
    city: 'Brussels',
    postalCode: '1000',
    houseNumber: '12A',
    mailboxNumber: '3',
    isDefault: true,
    extra: 'Near the city square',
  };

  it('should create a valid BelgiumAddress instance', () => {
    const address = new Models.BelgiumAddress(validBelgiumAddress);
    expect(address).toBeInstanceOf(Models.BelgiumAddress);
    expect(address.fullName).toBe('Pierre Dupont');
    expect(address.mobileNumber).toBe('+32412345678');
    expect(address.streetNumberAvenue).toBe('123 Avenue des Champs');
    expect(address.city).toBe('Brussels');
    expect(address.postalCode).toBe('1000');
    expect(address.houseNumber).toBe('12A');
    expect(address.mailboxNumber).toBe('3');
    expect(address.isDefault).toBe(true);
    expect(address.extra).toBe('Near the city square');
  });

  it('should throw an error for an invalid postal code', () => {
    const invalidData = { ...validBelgiumAddress, postalCode: 'ABCDE' };
    expect(() => new Models.BelgiumAddress(invalidData)).toThrowError();
  });

  it('should throw an error for missing required fields', () => {
    const invalidData = { ...validBelgiumAddress, streetNumberAvenue: '' };
    expect(() => new Models.BelgiumAddress(invalidData)).toThrowError();
  });
});

describe('BrazilAddress', () => {
  const validBrazilAddress = {
    fullName: 'Carlos Silva',
    mobileNumber: '+5511998765432',
    streetNumber: 'Rua A',
    houseNumber: '456',
    apartmentSuiteUnitBuilding: 'Apt 301',
    area: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    pincode: '01000-000',
    isDefault: true,
    extra: 'Near the park',
  };

  it('should create a valid BrazilAddress instance', () => {
    const address = new Models.BrazilAddress(validBrazilAddress);
    expect(address).toBeInstanceOf(Models.BrazilAddress);
    expect(address.fullName).toBe('Carlos Silva');
    expect(address.streetNumber).toBe('Rua A');
    expect(address.city).toBe('São Paulo');
  });

  it('should throw an error for an invalid pincode', () => {
    const invalidData = { ...validBrazilAddress, pincode: '999999' };
    expect(() => new Models.BrazilAddress(invalidData)).toThrowError();
  });
});

describe('CanadaAddress', () => {
  const validCanadaAddress = {
    fullName: 'John Smith',
    mobileNumber: '+14161234567',
    streetAddressPOBox: '123 Main St',
    provinceTerritory: CanadianProvinces.Ontario,
    city: 'Toronto',
    postalCode: 'M4B1B3',
    isDefault: false,
    extra: 'Near the CN Tower',
  };

  it('should create a valid CanadaAddress instance', () => {
    const address = new Models.CanadaAddress(validCanadaAddress);
    expect(address).toBeInstanceOf(Models.CanadaAddress);
    expect(address.fullName).toBe('John Smith');
    expect(address.city).toBe('Toronto');
    expect(address.postalCode).toBe('M4B1B3');
  });

  it('should throw an error for missing province', () => {
    const invalidData = { ...validCanadaAddress, city: '' };
    expect(() => new Models.CanadaAddress(invalidData)).toThrowError();
  });
});

describe('ChileAddress', () => {
  const validChileAddress = {
    fullName: 'Maria Gonzalez',
    mobileNumber: '+56912345678',
    address: '123 Calle Mayor',
    region: 'Metropolitana',
    city: 'Santiago',
    commune: 'Las Condes',
    pincode: '7550000',
    isDefault: false,
    extra: 'Near the mall',
  };

  it('should create a valid ChileAddress instance', () => {
    const address = new Models.ChileAddress(validChileAddress);
    expect(address).toBeInstanceOf(Models.ChileAddress);
    expect(address.fullName).toBe('Maria Gonzalez');
    expect(address.city).toBe('Santiago');
    expect(address.pincode).toBe('7550000');
  });

  it('should throw an error for missing region', () => {
    const invalidData = { ...validChileAddress, region: '' };
    expect(() => new Models.ChileAddress(invalidData)).toThrowError();
  });
});

describe('ColombiaAddress', () => {
  const validColombiaAddress = {
    fullName: 'Juan Perez',
    mobileNumber: '+573123456789',
    streetNumberApartment: '123 Calle 10 Apt 201',
    department: 'Bogotá D.C.',
    cityMunicipality: 'Bogotá',
    neighbourhood: 'Chapinero',
    postalCode: '110111',
    isDefault: true,
    extra: 'Near the university',
  };

  it('should create a valid ColombiaAddress instance', () => {
    const address = new Models.ColombiaAddress(validColombiaAddress);
    expect(address).toBeInstanceOf(Models.ColombiaAddress);
    expect(address.fullName).toBe('Juan Perez');
    expect(address.cityMunicipality).toBe('Bogotá');
    expect(address.postalCode).toBe('110111');
  });

  it('should throw an error for an invalid postal code', () => {
    const invalidData = { ...validColombiaAddress, postalCode: 'ABCDE' };
    expect(() => new Models.ColombiaAddress(invalidData)).toThrowError();
  });
});

describe('EgyptAddress', () => {
  const validEgyptAddress = {
    fullName: 'Ahmed El Sayed',
    mobileNumber: '+201122233344',
    streetNumber: '12 Tahrir St',
    buildingNameNo: 'Building 5',
    cityArea: 'Downtown',
    district: 'Cairo',
    governorate: 'Cairo Governorate',
    nearestLandmark: 'Tahrir Square',
    isDefault: true,
    extra: 'Close to the metro station',
  };

  it('should create a valid EgyptAddress instance', () => {
    const address = new Models.EgyptAddress(validEgyptAddress);
    expect(address).toBeInstanceOf(Models.EgyptAddress);
    expect(address.fullName).toBe('Ahmed El Sayed');
    expect(address.governorate).toBe('Cairo Governorate');
  });

  it('should throw an error for missing street number', () => {
    const invalidData = { ...validEgyptAddress, streetNumber: '' };
    expect(() => new Models.EgyptAddress(invalidData)).toThrowError();
  });
});

describe('UnitedArabEmiratesAddress', () => {
  const validUAEAddress = {
    fullName: 'Ali Al Mansoori',
    mobileNumber: '+971501234567',
    streetNumber: '10 Sheikh Zayed Rd',
    buildingNameNo: 'Building A',
    city: 'Dubai',
    areaDistrict: 'Business Bay',
    nearestLandmark: 'Burj Khalifa',
    isDefault: true,
    extra: 'Near the Dubai Mall',
  };

  it('should create a valid UnitedArabEmiratesAddress instance', () => {
    const address = new Models.UnitedArabEmiratesAddress(validUAEAddress);
    expect(address).toBeInstanceOf(Models.UnitedArabEmiratesAddress);
    expect(address.fullName).toBe('Ali Al Mansoori');
    expect(address.city).toBe('Dubai');
    expect(address.areaDistrict).toBe('Business Bay');
  });

  it('should throw an error for missing city', () => {
    const invalidData = { ...validUAEAddress, city: '' };
    expect(() => new Models.UnitedArabEmiratesAddress(invalidData)).toThrowError();
  });
});

describe('FranceAddress', () => {
  it('should create an instance of FranceAddress with valid data', () => {
    const data = {
      fullName: 'Jean Dupont',
      mobileNumber: '0612345678',
      isDefault: true,
      extra: 'Extra info',
      streetAddress: '123 Rue de Paris',
      pincode: '75001',
      city: 'Paris',
      apartmentSuiteUnitBuilding: 'Apt 2B',
    };

    const address = new Models.FranceAddress(data);

    expect(address.streetAddress).toBe(data.streetAddress);
    expect(address.pincode).toBe(data.pincode);
    expect(address.city).toBe(data.city);
    expect(address.apartmentSuiteUnitBuilding).toBe(data.apartmentSuiteUnitBuilding);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Jean Dupont',
      mobileNumber: '0612345678',
      isDefault: true,
      streetAddress: '123 Rue de Paris',
      pincode: '67',
      city: 'Paris',
    };

    expect(() => new Models.FranceAddress(invalidData)).toThrowError();
  });
});

describe('GermanyAddress', () => {
  it('should create an instance of GermanyAddress with valid data', () => {
    const data = {
      fullName: 'Hans Müller',
      mobileNumber: '49123456789',
      isDefault: true,
      extra: 'Extra info',
      postOfficeBoxAddressName: 'Postfach 123',
      plz: '10115',
      townCity: 'Berlin',
      apartmentSuiteUnitBuilding: 'Apt 3A',
    };

    const address = new Models.GermanyAddress(data);

    expect(address.postOfficeBoxAddressName).toBe(data.postOfficeBoxAddressName);
    expect(address.plz).toBe(data.plz);
    expect(address.townCity).toBe(data.townCity);
    expect(address.apartmentSuiteUnitBuilding).toBe(data.apartmentSuiteUnitBuilding);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Hans Müller',
      mobileNumber: '49123456789',
      postOfficeBoxAddressName: 'Postfach 123',
      plz: '115',
      townCity: 'Berlin',
      isDefault: true,
    };

    expect(() => new Models.GermanyAddress(invalidData)).toThrow();
  });
});

describe('HongKongAddress', () => {
  it('should create an instance of HongKongAddress with valid data', () => {
    const data = {
      fullName: 'Wong Lee',
      mobileNumber: '12345678',
      isDefault: false,
      extra: 'Extra info',
      flatNumberFloorNumberBuildingName: 'Flat 12A, 10th Floor, Tai Koo',
      streetNumberStreetName: "123 King's Road",
      villageTownDistrict: 'Tai Koo',
      city: 'Hong Kong',
    };

    const address = new Models.HongKongAddress(data);

    expect(address.flatNumberFloorNumberBuildingName).toBe(data.flatNumberFloorNumberBuildingName);
    expect(address.streetNumberStreetName).toBe(data.streetNumberStreetName);
    expect(address.villageTownDistrict).toBe(data.villageTownDistrict);
    expect(address.city).toBe(data.city);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Wong Lee',
      mobileNumber: '12345678',
      flatNumberFloorNumberBuildingName: 'Flat 12A, 10th Floor',
      streetNumberStreetName: "123 King's Road",
      villageTownDistrict: 'Tai Koo',
      city: '',
      isDefault: false,
    };

    expect(() => new Models.HongKongAddress(invalidData)).toThrow();
  });
});

describe('IndiaAddress', () => {
  it('should create an instance of IndiaAddress with valid data', () => {
    const data = {
      fullName: 'Rahul Sharma',
      mobileNumber: '9876543210',
      isDefault: true,
      extra: 'Extra info',
      pincode: '110001',
      flatHouseNoBuildingCompanyApartment: 'Flat 12B',
      areaStreetSectorVillage: 'Sector 15',
      townCity: 'New Delhi',
      state: IndianStates.Delhi,
      landmark: 'Near Park',
    };

    const address = new Models.IndiaAddress(data);

    expect(address.pincode).toBe(data.pincode);
    expect(address.townCity).toBe(data.townCity);
    expect(address.state).toBe(data.state);
    expect(address.landmark).toBe(data.landmark);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Rahul Sharma',
      mobileNumber: 'invalid-mobile',
      pincode: '110001',
      areaStreetSectorVillage: '',
      flatHouseNoBuildingCompanyApartment: 'Flat 12B',
      townCity: 'New Delhi',
      isDefault: true,
      state: IndianStates.Delhi,
    };

    expect(() => new Models.IndiaAddress(invalidData)).toThrow();
  });
});

describe('RepublicOfIrelandAddress', () => {
  it('should create an instance of RepublicOfIrelandAddress with valid data', () => {
    const data = {
      fullName: "Seán O'Connor",
      mobileNumber: '0851234567',
      isDefault: true,
      extra: 'Extra info',
      address: "123 St. Patrick's Street",
      eircode: 'D02X285',
      city: 'Dublin',
      county: IrishCounties.Dublin,
    };

    const address = new Models.RepublicOfIrelandAddress(data);

    expect(address.address).toBe(data.address);
    expect(address.eircode).toBe(data.eircode);
    expect(address.city).toBe(data.city);
    expect(address.county).toBe(data.county);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: "Seán O'Connor",
      mobileNumber: '48501234567',
      address: "123 St. Patrick's Street",
      eircode: 'D085',
      city: 'Dublin',
      isDefault: true,
    };

    expect(() => new Models.RepublicOfIrelandAddress(invalidData)).toThrow();
  });
});

describe('ItalyAddress', () => {
  it('should create an instance of ItalyAddress with valid data', () => {
    const data = {
      fullName: 'Giovanni Rossi',
      mobileNumber: '391234567890',
      isDefault: false,
      extra: 'Extra info',
      streetAddress: 'Via Roma, 12',
      pincode: '00185',
      city: 'Rome',
      province: 'RM',
    };

    const address = new Models.ItalyAddress(data);

    expect(address.streetAddress).toBe(data.streetAddress);
    expect(address.pincode).toBe(data.pincode);
    expect(address.city).toBe(data.city);
    expect(address.province).toBe(data.province);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Giovanni Rossi',
      mobileNumber: '48501234567',
      streetAddress: 'Via Roma, 12',
      pincode: '005',
      isDefault: true,
      city: 'Rome',
    };

    expect(() => new Models.ItalyAddress(invalidData)).toThrow();
  });
});

describe('JapanAddress', () => {
  it('should create an instance of JapanAddress with valid data', () => {
    const data = {
      fullName: 'Yuki Yamamoto',
      mobileNumber: '08012345678',
      isDefault: false,
      extra: 'Extra info',
      prefecture: JapanesePrefectures.Tokyo,
      postalCode: '100-0001',
      cityWardTown: 'Chiyoda',
      chromeBanchiGo: '1-1',
      buildingAptCompanyName: 'Tokyo Tower',
      unitRoomNo: '101',
    };

    const address = new Models.JapanAddress(data);

    expect(address.prefecture).toBe(data.prefecture);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.cityWardTown).toBe(data.cityWardTown);
    expect(address.chromeBanchiGo).toBe(data.chromeBanchiGo);
    expect(address.buildingAptCompanyName).toBe(data.buildingAptCompanyName);
    expect(address.unitRoomNo).toBe(data.unitRoomNo);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Yuki Yamamoto',
      mobileNumber: 'invalid-mobile',
      prefecture: JapanesePrefectures.Tokyo,
      postalCode: '',
      cityWardTown: 'Chiyoda',
      isDefault: true,
    };

    expect(() => new Models.JapanAddress(invalidData)).toThrow();
  });
});

describe('RepublicOfKoreaAddress', () => {
  it('should create an instance of RepublicOfKoreaAddress with valid data', () => {
    const data = {
      fullName: 'Kim Ji-hoon',
      mobileNumber: '01012345678',
      isDefault: true,
      extra: 'Extra info',
      address: '123 Gangnam-daero',
      zipCode: '06021',
      city: 'Seoul',
      province: 'Gangnam-gu',
    };

    const address = new Models.RepublicOfKoreaAddress(data);

    expect(address.address).toBe(data.address);
    expect(address.zipCode).toBe(data.zipCode);
    expect(address.city).toBe(data.city);
    expect(address.province).toBe(data.province);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Kim Ji-hoon',
      mobileNumber: 'invalid-mobile',
      address: '123 Gangnam-daero',
      zipCode: '06021',
      city: 'Seoul',
      isDefault: true,
      province: '',
    };

    expect(() => new Models.RepublicOfKoreaAddress(invalidData)).toThrow();
  });
});

describe('MexicoAddress', () => {
  it('should create an instance of MexicoAddress with valid data', () => {
    const data = {
      fullName: 'Carlos García',
      mobileNumber: '5512345678',
      isDefault: false,
      extra: 'Extra info',
      streetAddress: 'Avenida Insurgentes Sur, 123',
      postalCode: '03100',
      stateProvinceRegion: 'CDMX',
      city: 'Mexico City',
      colony: 'Del Valle',
    };

    const address = new Models.MexicoAddress(data);

    expect(address.streetAddress).toBe(data.streetAddress);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.stateProvinceRegion).toBe(data.stateProvinceRegion);
    expect(address.city).toBe(data.city);
    expect(address.colony).toBe(data.colony);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Carlos García',
      mobileNumber: 'invalid-mobile',
      streetAddress: 'Avenida Insurgentes Sur, 123',
      postalCode: '03100',
      city: 'Mexico City',
      colony: 'Del Valle',
      isDefault: true,
      stateProvinceRegion: '',
    };

    expect(() => new Models.MexicoAddress(invalidData)).toThrow();
  });
});

describe('NewZealandAddress', () => {
  it('should create an instance of NewZealandAddress with valid data', () => {
    const data = {
      fullName: 'James Smith',
      mobileNumber: '0211234567',
      isDefault: true,
      extra: 'Extra info',
      streetNumber: '15',
      postalCode: '6011',
      suburb: 'Te Aro',
      townCity: 'Wellington',
    };

    const address = new Models.NewZealandAddress(data);

    expect(address.streetNumber).toBe(data.streetNumber);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.suburb).toBe(data.suburb);
    expect(address.townCity).toBe(data.townCity);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'James Smith',
      mobileNumber: '48501234567',
      streetNumber: '15',
      postalCode: '611',
      suburb: 'Te Aro',
      townCity: 'Wellington',
      isDefault: true,
    };

    expect(() => new Models.NewZealandAddress(invalidData)).toThrow();
  });
});

describe('PhilippinesAddress', () => {
  it('should create an instance of PhilippinesAddress with valid data', () => {
    const data = {
      fullName: 'Juan Dela Cruz',
      mobileNumber: '09171234567',
      isDefault: true,
      extra: 'Extra details',
      postalCode: '1000',
      barangay: 'Barangay 123',
      city: 'Manila',
      region: 'NCR',
    };

    const address = new Models.PhilippinesAddress(data);

    expect(address.postalCode).toBe(data.postalCode);
    expect(address.barangay).toBe(data.barangay);
    expect(address.city).toBe(data.city);
    expect(address.region).toBe(data.region);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Juan Dela Cruz',
      mobileNumber: 'invalid-mobile',
      barangay: 'Barangay 123',
      city: 'Manila',
      postalCode: 'invalid',
      region: 'idk',
      isDefault: true,
    };

    expect(() => new Models.PhilippinesAddress(invalidData)).toThrow();
  });
});

describe('PolandAddress', () => {
  it('should create an instance of PolandAddress with valid data', () => {
    const data = {
      fullName: 'Jan Kowalski',
      mobileNumber: '48501234567',
      isDefault: false,
      extra: 'Extra info',
      postOfficeBoxAddressName: 'PO Box 123',
      postalCode: '00-123',
      city: 'Warsaw',
      apartmentSuiteUnitBuilding: 'Apartment 1B',
    };

    const address = new Models.PolandAddress(data);

    expect(address.postOfficeBoxAddressName).toBe(data.postOfficeBoxAddressName);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.city).toBe(data.city);
    expect(address.apartmentSuiteUnitBuilding).toBe(data.apartmentSuiteUnitBuilding);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Jan Kowalski',
      mobileNumber: '48501234567',
      postOfficeBoxAddressName: 'PO Box 123',
      postalCode: '0',
      isDefault: true,
    };

    expect(() => new Models.PolandAddress(invalidData)).toThrow();
  });
});

describe('SaudiArabiaAddress', () => {
  it('should create an instance of SaudiArabiaAddress with valid data', () => {
    const data = {
      fullName: 'Ali Mohammed',
      mobileNumber: '0501234567',
      isDefault: true,
      extra: 'Extra info',
      streetNumber: '123',
      buildingNameNo: 'Building 456',
      city: 'Riyadh',
      area: 'Al Olaya',
      province: 'Riyadh',
      nearestLandmark: 'Near the mosque',
    };

    const address = new Models.SaudiArabiaAddress(data);

    expect(address.streetNumber).toBe(data.streetNumber);
    expect(address.buildingNameNo).toBe(data.buildingNameNo);
    expect(address.city).toBe(data.city);
    expect(address.area).toBe(data.area);
    expect(address.province).toBe(data.province);
    expect(address.nearestLandmark).toBe(data.nearestLandmark);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Ali Mohammed',
      mobileNumber: 'invalid-mobile',
      streetNumber: '123',
      buildingNameNo: 'Building 456',
      city: 'Riyadh',
      isDefault: true,
      area: '',
      province: '',
    };

    expect(() => new Models.SaudiArabiaAddress(invalidData)).toThrow();
  });
});

describe('SingaporeAddress', () => {
  it('should create an instance of SingaporeAddress with valid data', () => {
    const data = {
      fullName: 'Tan Ah Kow',
      mobileNumber: '81234567',
      isDefault: false,
      extra: 'Extra info',
      postalCode: '123456',
      streetAddressPOBoxCompanyName: '123 Orchard Road',
      apartmentSuiteUnitBuilding: 'Unit 12-34',
    };

    const address = new Models.SingaporeAddress(data);

    expect(address.postalCode).toBe(data.postalCode);
    expect(address.streetAddressPOBoxCompanyName).toBe(data.streetAddressPOBoxCompanyName);
    expect(address.apartmentSuiteUnitBuilding).toBe(data.apartmentSuiteUnitBuilding);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Tan Ah Kow',
      mobileNumber: 'invalid-mobile',
      postalCode: '123456',
      isDefault: true,
      apartmentSuiteUnitBuilding: '',
      streetAddressPOBoxCompanyName: '123 Orchard Road',
    };

    expect(() => new Models.SingaporeAddress(invalidData)).toThrow();
  });
});

describe('SpainAddress', () => {
  it('should create an instance of SpainAddress with valid data', () => {
    const data = {
      fullName: 'Carlos Ruiz',
      mobileNumber: '600123456',
      isDefault: true,
      extra: 'Extra info',
      address: 'Calle Mayor, 123',
      city: 'Madrid',
      postalCode: '28001',
      province: 'Madrid',
      nif: '12345678Z',
    };

    const address = new Models.SpainAddress(data);

    expect(address.address).toBe(data.address);
    expect(address.city).toBe(data.city);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.province).toBe(data.province);
    expect(address.nif).toBe(data.nif);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Carlos Ruiz',
      mobileNumber: 'invalid-mobile',
      address: 'Calle Mayor, 123',
      city: 'Madrid',
      isDefault: true,
      postalCode: '',
    };

    expect(() => new Models.SpainAddress(invalidData)).toThrow();
  });
});

describe('SwedenAddress', () => {
  it('should create an instance of SwedenAddress with valid data', () => {
    const data = {
      fullName: 'Lars Svensson',
      mobileNumber: '0701234567',
      isDefault: false,
      extra: 'Extra info',
      postOfficeBoxAddressName: 'Box 123',
      postalCode: '114 56',
      city: 'Stockholm',
      apartmentSuiteUnitBuilding: 'Apartment 1A',
    };

    const address = new Models.SwedenAddress(data);

    expect(address.postOfficeBoxAddressName).toBe(data.postOfficeBoxAddressName);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.city).toBe(data.city);
    expect(address.apartmentSuiteUnitBuilding).toBe(data.apartmentSuiteUnitBuilding);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Lars Svensson',
      mobileNumber: '48501234567',
      postOfficeBoxAddressName: 'Box 123',
      postalCode: '156',
      city: 'Stockholm',
      isDefault: true,
    };

    expect(() => new Models.SwedenAddress(invalidData)).toThrow();
  });
});

describe('TaiwanAddress', () => {
  it('should create an instance of TaiwanAddress with valid data', () => {
    const data = {
      fullName: 'Lin Chun',
      mobileNumber: '0912123456',
      isDefault: true,
      extra: 'Extra info',
      address: 'No. 123, Zhongshan Rd.',
      pincode: '10032',
      district: 'Zhongzheng',
      city: 'Taipei',
    };

    const address = new Models.TaiwanAddress(data);

    expect(address.address).toBe(data.address);
    expect(address.pincode).toBe(data.pincode);
    expect(address.district).toBe(data.district);
    expect(address.city).toBe(data.city);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Lin Chun',
      mobileNumber: 'invalid-mobile',
      address: 'No. 123, Zhongshan Rd.',
      pincode: '100',
      isDefault: true,
      district: '',
      city: '',
    };

    expect(() => new Models.TaiwanAddress(invalidData)).toThrow();
  });
});

describe('TurkeyAddress', () => {
  it('should create an instance of TurkeyAddress with valid data', () => {
    const data = {
      fullName: 'Ahmet Yılmaz',
      mobileNumber: '05051234567',
      isDefault: true,
      extra: 'Extra info',
      address: 'Caddesi No: 123',
      city: 'Istanbul',
      postalCode: '34000',
      stateProvinceRegion: 'Marmara',
      area: 'Bakırköy',
    };

    const address = new Models.TurkeyAddress(data);

    expect(address.address).toBe(data.address);
    expect(address.city).toBe(data.city);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.stateProvinceRegion).toBe(data.stateProvinceRegion);
    expect(address.area).toBe(data.area);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Ahmet Yılmaz',
      mobileNumber: 'invalid-mobile',
      address: 'Caddesi No: 123',
      city: 'Istanbul',
      isDefault: true,
      postalCode: '',
    };

    expect(() => new Models.TurkeyAddress(invalidData)).toThrow();
  });
});

describe('UnitedKingdomAddress', () => {
  it('should create an instance of UnitedKingdomAddress with valid data', () => {
    const data = {
      fullName: 'John Smith',
      mobileNumber: '07123456789',
      isDefault: false,
      extra: 'Extra info',
      address: '123 Baker Street',
      townCity: 'London',
      postalCode: 'NW1 6XE',
      county: 'Greater London',
    };

    const address = new Models.UnitedKingdomAddress(data);

    expect(address.address).toBe(data.address);
    expect(address.townCity).toBe(data.townCity);
    expect(address.postalCode).toBe(data.postalCode);
    expect(address.county).toBe(data.county);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'John Smith',
      mobileNumber: 'invalid-mobile',
      address: '123 Baker Street',
      townCity: 'London',
      isDefault: true,
      postalCode: '',
    };

    expect(() => new Models.UnitedKingdomAddress(invalidData)).toThrow();
  });
});

describe('UnitedStatesAddress', () => {
  it('should create an instance of UnitedStatesAddress with valid data', () => {
    const data = {
      fullName: 'Jane Doe',
      mobileNumber: '1234567890',
      isDefault: true,
      extra: 'Extra info',
      address: '456 Elm St.',
      pincode: '90210',
      state: USStates.California,
      city: 'Beverly Hills',
    };

    const address = new Models.UnitedStatesAddress(data);

    expect(address.address).toBe(data.address);
    expect(address.pincode).toBe(data.pincode);
    expect(address.state).toBe(data.state);
    expect(address.city).toBe(data.city);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Jane Doe',
      mobileNumber: 'invalid-mobile',
      address: '456 Elm St.',
      pincode: '90210',
      isDefault: true,
      state: USStates.Alabama,
      city: '',
    };

    expect(() => new Models.UnitedStatesAddress(invalidData)).toThrow();
  });
});

describe('CommonAddress', () => {
  it('should create an instance of CommonAddress with valid data', () => {
    const data = {
      fullName: 'Ali Veli',
      mobileNumber: '5551234567',
      isDefault: false,
      extra: 'Extra info',
      postOfficeBoxAddressName: 'PO Box 123',
      city: 'Ankara',
      pincode: '06000',
      apartmentSuiteUnitBuilding: 'Apartment 5B',
      stateProvinceRegion: 'Central Anatolia',
    };

    const address = new CommonAddress(data);

    expect(address.postOfficeBoxAddressName).toBe(data.postOfficeBoxAddressName);
    expect(address.city).toBe(data.city);
    expect(address.pincode).toBe(data.pincode);
    expect(address.apartmentSuiteUnitBuilding).toBe(data.apartmentSuiteUnitBuilding);
    expect(address.stateProvinceRegion).toBe(data.stateProvinceRegion);
  });

  it('should throw an error for invalid data', () => {
    const invalidData = {
      fullName: 'Ali Veli',
      mobileNumber: 'invalid-mobile',
      postOfficeBoxAddressName: 'PO Box 123',
      city: 'Ankara',
      isDefault: true,
      pincode: '',
    };

    expect(() => new CommonAddress(invalidData)).toThrow();
  });
});
