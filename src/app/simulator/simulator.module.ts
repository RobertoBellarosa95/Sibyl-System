import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { InfoComponent } from '../component/info.component';
import { AppDialogModule } from '../dialog/dialog.module';
import { ConfiguratorComponent } from './component/configurator.component';
import { ConversationComponent } from './component/conversation.component';
import { CircularImageComponent } from './component/img/image.component';
import { PanelComponent } from './component/panel.component';
import { PersonComponent } from './component/person.component';
import { ResponseHistoryComponent } from './component/response-history.compoent';
import { SibylComponent } from './component/sibyl.component';
import { SimulatorRoutingModule } from './simulator-routing.component';
import { SimulatorComponent } from './simulator.component';

@NgModule({
  imports: [
    CommonModule,
    SimulatorRoutingModule,
    PanelModule,
    CardModule,
    ReactiveFormsModule,
    InputNumberModule,
    DropdownModule,
    OverlayPanelModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    AppDialogModule,
    ButtonModule,
    InputTextModule,
  ],
  exports: [],
  declarations: [
    SimulatorComponent,
    SibylComponent,
    ConfiguratorComponent,
    PanelComponent,
    PersonComponent,
    ConversationComponent,
    CircularImageComponent,
    ConversationComponent,
    ResponseHistoryComponent,
    InfoComponent,
  ],
  providers: [DialogService],
})
export class SimulatorModule {}
