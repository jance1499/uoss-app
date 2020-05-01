import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SpeedwalksComponent } from './speedwalks/speedwalks.component';
import { SpeedwalkAddComponent } from './speedwalks/speedwalk-add/speedwalk-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AreasService } from './areas/areas.service';
import { AreasComponent } from './areas/areas.component';
import { EquipmentService } from './equipment/equipment.service';
import { EquipmentComponent } from './equipment/equipment.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'speedwalks', component: SpeedwalksComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'equipment', component: EquipmentComponent },
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
    SpeedwalkAddComponent,
    AreasComponent,
    EquipmentComponent,
  ],
  entryComponents: [
    SpeedwalkAddComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    FontAwesomeModule,
    ClipboardModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AreasService,
    EquipmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
