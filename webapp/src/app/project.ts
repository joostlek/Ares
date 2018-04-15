import {Social} from "./social";

export class Project {
  id: number;
  name: string;
  socials: Social[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.socials = [];
  }
}
