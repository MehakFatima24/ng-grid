import { Component, Input } from '@angular/core';
import { faUser, faClipboard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  faUser = faUser;
  faClipboard = faClipboard;
  clicked: boolean = false;
  @Input() postId: number = 0;
  @Input() userId: number = 0;

  /**
   * This method toggles the click property.
   */
  toggleClick() {
    this.clicked = !this.clicked;
  }
}
