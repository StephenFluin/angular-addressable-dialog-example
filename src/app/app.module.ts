import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HostComponent } from './host/host.component';
import { DetailsComponent } from './details/details.component';
import { BlankComponent } from './blank/blank.component';
import { MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    DetailsComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '', component: BlankComponent},
      {path: ':id/details', component: HostComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DetailsComponent],
})
export class AppModule { }
