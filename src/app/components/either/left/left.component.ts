import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uv-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LeftComponent {}
