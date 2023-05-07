import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
