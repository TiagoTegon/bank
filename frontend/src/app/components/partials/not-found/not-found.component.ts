import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-foud',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Nothing Found!";

  @Input()
  resetLinkText = "Reload";

  @Input()
  resetLinkRoute = "/";
}
