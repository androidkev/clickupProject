import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
import { Resource } from '../../../core/constants/constants';
import { selectResource } from '../../../services/state/selectors';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() resource: Resource[] = [];

  @Output() selectedResource = new EventEmitter<string>();

  list: Resource[] = [];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  transfer = [];

  constructor() {}

  ngOnInit() {
    this.list = [...this.resource];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.list = [...this.resource];
  }

  click(item: string) {
    this.selectedResource.emit(item);
  }
}
