import {Component, Input, OnInit} from '@angular/core';
import {Social} from "../social";

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  @Input() social: Social;
  constructor() { }

  ngOnInit() {
  }

}
