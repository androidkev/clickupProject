import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: 'object-cell.component.html',
  styleUrls: ['object-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectCellComponent implements OnInit, OnChanges {
  @Input() item: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  typeof(item: any) {
    return typeof item === 'object';
  }
}
