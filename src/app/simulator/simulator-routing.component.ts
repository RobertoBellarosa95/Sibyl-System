import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorComponent } from './component/configurator.component';
import { SibylComponent } from './component/sibyl.component';
import { InfoComponent } from '../component/info.component';

const routes: Routes = [
  { path: '', redirectTo: 'sibyl', pathMatch: 'full' },
  { path: 'sibyl', component: SibylComponent },
  { path: 'configurator', component: ConfiguratorComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulatorRoutingModule {}
