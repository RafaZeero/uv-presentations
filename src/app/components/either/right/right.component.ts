import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'uv-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RightComponent {}
