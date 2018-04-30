import {Language} from "@app/language";
import {Framework} from "@app/framework";
import {Social} from "@app/social";

export class Project {
  id: number;
  name: string;
  description: string;
  languages: Language[];
  frameworks: Framework[];
  _full_description: string;
  _socials: Social[];
  _images: string[];

  constructor(id: number, name: string, description: string, languages: Language[], frameworks: Framework[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.languages = languages;
    this.frameworks = frameworks;
  }

  set socials(value: Social[]) {
    this._socials = value;
  }

  set images(value: string[]) {
    this._images = value;
  }

  set full_description(value: string) {
    this._full_description = value;
  }
}
