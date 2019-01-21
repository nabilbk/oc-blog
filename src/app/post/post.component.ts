import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts = 0;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  loveIt() {
    this.loveIts++;
    console.log(+this.loveIts);
  }
  dontLoveIt() {
    this.loveIts--;
    console.log(+this.loveIts);
  }
}
