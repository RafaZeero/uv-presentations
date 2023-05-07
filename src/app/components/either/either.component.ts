import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uv-either',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './either.component.html',
  styleUrls: ['./either.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EitherComponent {}
