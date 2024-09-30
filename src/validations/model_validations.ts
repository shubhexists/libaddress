import { z } from 'zod';
import baseAddressSchema from './base_address.zod';
import { CanadianProvinces, IndianStates, IrishCounties, JapanesePrefectures, USStates } from '../enums';

const southAfricaAddressSchema = baseAddressSchema.extend({
  streetNumber: z.string().min(1, 'Street number is required'),
  city: z.string().min(1, 'City is required'),
  area: z.string().min(1, 'Area is required'),
  stateProvinceRegion: z.string().min(1, 'State/Province/Region is required'),
  postalCode: z.string().regex(/^\d{4}$/, 'Invalid postal code'),
});

const australiaAddressSchema = baseAddressSchema.extend({
  streetAddressPOBoxCompanyName: z.string().min(1, 'Street address, PO Box, or company name is required'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  citySuburb: z.string().min(1, 'City/Suburb is required'),
  stateTerritory: z.string().min(1, 'State/Territory is required'),
  postalCode: z.string().regex(/^\d{4}$/, 'Invalid postal code'),
});

const spainAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().regex(/^\d{5}$/, 'Invalid postal code'),
  province: z.string().optional(),
  nif: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const swedenAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  postOfficeBoxAddressName: z.string().min(1, 'Post Office Box Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().regex(/^\d{3} \d{2}$/, 'Invalid postal code'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const taiwanAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  address: z.string().min(1, 'Address is required'),
  pincode: z.string().regex(/^\d{5}$/, 'Invalid pincode'),
  district: z.string().min(1, 'District is required'),
  city: z.string().min(1, 'City is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const turkeyAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().regex(/^\d{5}$/, 'Invalid postal code'),
  stateProvinceRegion: z.string().optional(),
  area: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const unitedKingdomAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  address: z.string().min(1, 'Address is required'),
  townCity: z.string().min(1, 'Town/City is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  county: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const unitedStatesAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  address: z.string().min(1, 'Address is required'),
  pincode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid pincode'),
  state: z.nativeEnum(USStates),
  city: z.string().min(1, 'City is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const singaporeAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  postalCode: z.string().regex(/^\d{6}$/, 'Invalid postal code'),
  streetAddressPOBoxCompanyName: z.string().min(1, 'Street address/PO Box/Company name is required'),
  apartmentSuiteUnitBuilding: z.string().min(1, 'Apartment/Suite/Unit/Building is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const saudiArabiaAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  streetNumber: z.string().min(1, 'Street number is required'),
  buildingNameNo: z.string().min(1, 'Building name/number is required'),
  city: z.string().min(1, 'City is required'),
  area: z.string().min(1, 'Area is required'),
  province: z.string().min(1, 'Province is required'),
  nearestLandmark: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const polandAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  postOfficeBoxAddressName: z.string().min(1, 'Post Office Box Address is required'),
  postalCode: z.string().regex(/^\d{2}-\d{3}$/, 'Invalid postal code'),
  city: z.string().optional(),
  apartmentSuiteUnitBuilding: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const philippinesAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  postalCode: z.string().regex(/^\d{4}$/, 'Invalid postal code'),
  barangay: z.string().min(1, 'Barangay is required'),
  city: z.string().min(1, 'City is required'),
  region: z.string().min(1, 'Region is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const newZealandAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  streetNumber: z.string().min(1, 'Street number is required'),
  postalCode: z.string().regex(/^\d{4}$/, 'Invalid postal code'),
  suburb: z.string().min(1, 'Suburb is required'),
  townCity: z.string().min(1, 'Town/City is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const mexicoAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  streetAddress: z.string().min(1, 'Street address is required'),
  postalCode: z.string().regex(/^\d{5}$/, 'Invalid postal code'),
  stateProvinceRegion: z.string().min(1, 'State/Province/Region is required'),
  city: z.string().min(1, 'City is required'),
  colony: z.string().min(1, 'Colony is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const koreaAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  address: z.string().min(1, 'Address is required'),
  zipCode: z.string().regex(/^\d{5}$/, 'Invalid zip code'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const japanAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  prefecture: z.nativeEnum(JapanesePrefectures),
  postalCode: z.string().regex(/^\d{3}-\d{4}$/, 'Invalid postal code'),
  cityWardTown: z.string().min(1, 'City/Ward/Town is required'),
  chromeBanchiGo: z.string().optional(),
  buildingAptCompanyName: z.string().optional(),
  unitRoomNo: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const italyAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  streetAddress: z.string().min(1, 'Street address is required'),
  pincode: z.string().regex(/^\d{5}$/, 'Invalid pincode'),
  city: z.string().min(1, 'City is required'),
  staircaseFloorInteriorCompany: z.string().optional(),
  province: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const republicOfIrelandAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  address: z.string().min(1, 'Address is required'),
  eircode: z.string().regex(/^[A-Za-z0-9]{7}$/, 'Invalid eircode'),
  city: z.string().min(1, 'City is required'),
  county: z.nativeEnum(IrishCounties).optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const indiaAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  pincode: z.string().regex(/^\d{6}$/, 'Invalid pincode'),
  flatHouseNoBuildingCompanyApartment: z.string().min(1, 'Flat/House/Building/Company is required'),
  areaStreetSectorVillage: z.string().min(1, 'Area/Street/Sector/Village is required'),
  townCity: z.string().min(1, 'Town/City is required'),
  state: z.nativeEnum(IndianStates, { errorMap: () => ({ message: 'Invalid state' }) }),
  landmark: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const hongKongAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  flatNumberFloorNumberBuildingName: z.string().min(1, 'Flat/Floor/Building name is required'),
  streetNumberStreetName: z.string().min(1, 'Street number and name are required'),
  villageTownDistrict: z.string().min(1, 'Village/Town/District is required'),
  city: z.string().min(1, 'City is required'),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const germanyAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  postOfficeBoxAddressName: z.string().min(1, 'Post office box address is required'),
  plz: z.string().regex(/^\d{5}$/, 'Invalid postal code'),
  townCity: z.string().min(1, 'Town/City is required'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const franceAddressSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  mobileNumber: z.string().min(1, 'Invalid mobile number'),
  streetAddress: z.string().min(1, 'Street address is required'),
  pincode: z.string().regex(/^\d{5}$/, 'Invalid pincode'),
  city: z.string().min(1, 'City is required'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  isDefault: z.boolean().default(false),
  extra: z.string().optional(),
});

const uaeAddressSchema = baseAddressSchema.extend({
  streetNumber: z.string().min(1, 'Street number is required'),
  buildingNameNo: z.string().min(1, 'Building name/number is required'),
  city: z.string().min(1, 'City is required'),
  areaDistrict: z.string().min(1, 'Area/District is required'),
  nearestLandmark: z.string().optional(),
});

const egyptAddressSchema = baseAddressSchema.extend({
  streetNumber: z.string().min(1, 'Street number is required'),
  buildingNameNo: z.string().min(1, 'Building name/number is required'),
  cityArea: z.string().min(1, 'City/Area is required'),
  district: z.string().min(1, 'District is required'),
  governorate: z.string().min(1, 'Governorate is required'),
  nearestLandmark: z.string().optional(),
});

const colombiaAddressSchema = baseAddressSchema.extend({
  streetNumberApartment: z.string().min(1, 'Street number/apartment is required'),
  department: z.string().min(1, 'Department is required'),
  cityMunicipality: z.string().min(1, 'City/Municipality is required'),
  neighbourhood: z.string().min(1, 'Neighbourhood is required'),
  postalCode: z.string().regex(/^\d{6}$/, 'Invalid postal code'),
});

const chileAddressSchema = baseAddressSchema.extend({
  address: z.string().min(1, 'Address is required'),
  region: z.string().min(1, 'Region is required'),
  city: z.string().min(1, 'City is required'),
  commune: z.string().min(1, 'Commune is required'),
  pincode: z.string().regex(/^\d{7}$/, 'Invalid pincode'),
});

const canadaAddressSchema = baseAddressSchema.extend({
  streetAddressPOBox: z.string().min(1, 'Street address or PO Box is required'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  provinceTerritory: z.nativeEnum(CanadianProvinces, { errorMap: () => ({ message: 'Invalid province or territory' }) }),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().regex(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, 'Invalid postal code'),
});

const brazilAddressSchema = baseAddressSchema.extend({
  streetNumber: z.string().min(1, 'Street number is required'),
  houseNumber: z.string().min(1, 'House number is required'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  area: z.string().min(1, 'Area is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  pincode: z.string().regex(/^\d{5}-?\d{3}$/, 'Invalid pincode'),
});

const belgiumAddressSchema = baseAddressSchema.extend({
  streetNumberAvenue: z.string().min(1, 'Street, number, or avenue is required'),
  city: z.string().min(1, 'City is required'),
  postalCode: z.string().regex(/^\d{4}$/, 'Invalid postal code'),
  apartmentSuiteUnitBuilding: z.string().optional(),
  houseNumber: z.string().optional(),
  mailboxNumber: z.string().optional(),
});

const austriaAddressSchema = baseAddressSchema.extend({
  address: z.string().min(1, 'Address is required'),
  plz: z.string().regex(/^\d{4}$/, 'Invalid postal code'),
  townCity: z.string().optional(),
});

export {
  southAfricaAddressSchema,
  australiaAddressSchema,
  austriaAddressSchema,
  belgiumAddressSchema,
  brazilAddressSchema,
  canadaAddressSchema,
  chileAddressSchema,
  colombiaAddressSchema,
  saudiArabiaAddressSchema,
  singaporeAddressSchema,
  spainAddressSchema,
  swedenAddressSchema,
  franceAddressSchema,
  philippinesAddressSchema,
  polandAddressSchema,
  hongKongAddressSchema,
  republicOfIrelandAddressSchema,
  mexicoAddressSchema,
  newZealandAddressSchema,
  indiaAddressSchema,
  italyAddressSchema,
  egyptAddressSchema,
  germanyAddressSchema,
  uaeAddressSchema,
  unitedKingdomAddressSchema,
  unitedStatesAddressSchema,
  koreaAddressSchema,
  taiwanAddressSchema,
  turkeyAddressSchema,
  japanAddressSchema,
};
