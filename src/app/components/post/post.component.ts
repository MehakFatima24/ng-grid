import { Component, Input, OnInit } from '@angular/core';
import { faUser, faClipboard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  faUser = faUser;
  faClipboard = faClipboard;
  @Input() clicked: boolean = false;
  @Input() postId: number = 0;
  @Input() userId: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
