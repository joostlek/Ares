import {Language} from "./language";
import {Framework} from "./framework";

export class Project {
  id: number;
  name: string;
  languages: Language[];
  frameworks: Framework[];

  constructor(id: number, name: string, languages: Language[], frameworks: Framework[]) {
    this.id = id;
    this.name = name;
    this.languages = languages;
    this.frameworks = frameworks;
  }
}
