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
import { Resource, Content } from '../../../core/constants/constants';

@Component({
  selector: 'app-table',
  templateUrl: 'resource-table.component.html',
  styleUrls: ['resource-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() resourceContent: Content[] = [];

  @Output() selectedResource = new EventEmitter<string>();

  list: Content[] = [];

  transfer = [];

  constructor() {}

  ngOnInit() {
    this.list = [...this.resourceContent];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.list = [...this.resourceContent];
  }

  click(item: string) {
    this.selectedResource.emit(item);
  }
}
