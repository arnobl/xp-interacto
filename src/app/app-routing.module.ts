import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {Tp2Component} from './component/tp2/tp2.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'tp2', component: Tp2Component },
  // { path: 'comp', component: CompComponent },
  { path: '',
    redirectTo: '/', // auto redirect to /c1
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
