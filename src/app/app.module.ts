import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SpeedwalksComponent } from './speedwalks/speedwalks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AreasService } from './areas/areas.service';
import { AreasComponent } from './areas/areas.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'speedwalks', component: SpeedwalksComponent },
  { path: 'areas', component: AreasComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SpeedwalksComponent,
    AreasComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ClipboardModule,
    NgbModule
  ],
  providers: [
    AreasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
