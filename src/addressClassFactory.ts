import CommonAddress from './common_address';
import * as Models from './models';

const country_map = {
  Australia: Models.AustraliaAddress,
  Austria: Models.AustriaAddress,
  Belgium: Models.BelgiumAddress,
  Brazil: Models.BrazilAddress,
  Canada: Models.CanadaAddress,
  Chile: Models.ChileAddress,
  Colombia: Models.ColombiaAddress,
  Egypt: Models.EgyptAddress,
  France: Models.FranceAddress,
  Germany: Models.GermanyAddress,
  India: Models.IndiaAddress,
  Italy: Models.ItalyAddress,
  SaudiArabia: Models.SaudiArabiaAddress,
  Singapore: Models.SingaporeAddress,
  SouthAfrica: Models.SouthAfricaAddress,
  Mexico: Models.MexicoAddress,
  NewZealand: Models.NewZealandAddress,
  HongKong: Models.HongKongAddress,
  RepublicOfIreland: Models.RepublicOfIrelandAddress,
  RepublicOfKorea: Models.RepublicOfKoreaAddress,
  Japan: Models.JapanAddress,
  Spain: Models.SpainAddress,
  Sweden: Models.SwedenAddress,
  Philippines: Models.PhilippinesAddress,
  Poland: Models.PolandAddress,
  Taiwan: Models.TaiwanAddress,
  Turkey: Models.TurkeyAddress,
  UnitedArabEmirates: Models.UnitedArabEmiratesAddress,
  UnitedKingdom: Models.UnitedKingdomAddress,
  UnitedStates: Models.UnitedStatesAddress,
} as const;

type CountryCode = keyof typeof country_map;

function getAddressClass<T extends CountryCode>(countryCode: T): (typeof country_map)[T];
function getAddressClass(countryCode: string): typeof CommonAddress;
function getAddressClass(countryCode: string) {
  return countryCode in country_map ? country_map[countryCode as CountryCode] : CommonAddress;
}

export { getAddressClass };
export type { CountryCode };
