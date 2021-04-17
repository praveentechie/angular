export class UserModal {
  public userName: string;
  public firstName: string;
  public lastName: string;
  public password: string;
  public permissions: Array<String>;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }

/*   public get userName(): string {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  } 
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
*/
}