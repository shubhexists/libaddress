export default abstract class BaseAddress {
  fullName: string;
  mobileNumber: string;
  isDefault: boolean;
  extra?: string;

  constructor(fullName: string, mobileNumber: string, isDefault: boolean = false, extra?: string) {
    this.fullName = fullName;
    this.mobileNumber = mobileNumber;
    this.isDefault = isDefault;
    this.extra = extra;
  }
}
