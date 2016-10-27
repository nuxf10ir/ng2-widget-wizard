import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-follow',
  templateUrl: './widget-follow.component.html',
  styleUrls: ['./widget-follow.component.css']
})
export class WidgetFollowComponent implements OnInit {

  @Input() follow;

  constructor() { }

  ngOnInit() {
  }

}
