export class Social {
  id: number;
  url: string;
  icon: string;
  color: string;
  name: string;
  customName: string;

  constructor(id: number, url: string, icon: string, color: string, name: string, customName: string) {
    this.id = id;
    this.url = url;
    this.icon = icon;
    this.color = color;
    this.name = name;
    this.customName = customName;
  }
}
