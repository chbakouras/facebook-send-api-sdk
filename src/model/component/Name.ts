export interface IName {
  first_name: string
  last_name: string
}

export default class Name {
  public first_name: string
  public last_name: string

  constructor(name: IName) {
    this.first_name = name.first_name
    this.last_name = name.last_name
  }
}
