import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../../core/pipes/pipe.module';

// Components
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [ButtonComponent, CardComponent, TableComponent],
  imports: [CommonModule, DragDropModule, TranslateModule.forRoot(), FormsModule, PipeModule],
  providers: [ButtonComponent, CardComponent, TableComponent],
  exports: [ButtonComponent, CardComponent, TableComponent],
  bootstrap: [],
})
export class ComponentsModule {}
