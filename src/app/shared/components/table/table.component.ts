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

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnChanges {
  @Input() public width: number;
  @Input() public height: number;
  @Input() public left: number;
  @Input() public top: number;
  @Input() resource: Resource[] = [];

  @Output() selectedResource = new EventEmitter<string>();

  public list: Resource[] = [];
  public search = '';
  public toogle = false;

  transfer = [];

  constructor() {}

  ngOnInit() {
    this.list = [...this.resource];
  }

  ngOnChanges() {
    this.list = [...this.resource];
  }

  click(item: string) {
    this.selectedResource.emit(item);
  }
}
