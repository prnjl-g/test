import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/home/table/table.component';
import { AppRoutes } from './app-routing.module';
import { SideNavbarComponent } from './components/home/side-navbar/side-navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UploadComponent } from './components/upload/upload.component';
import { DownloadComponent } from './components/download/download.component';
import {FileUploadModule} from 'ng2-file-upload';
import { InfoComponent } from './components/info/info.component';
import { SidebarDirective } from './components/home/side-navbar/sidebar.directive';
import { FullScreenTestComponent } from './components/full-screen-test/full-screen-test.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    TableComponent,
    SideNavbarComponent,
    UploadComponent,
    DownloadComponent,
    InfoComponent,
    SidebarDirective,
    FullScreenTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFontAwesomeModule,
    MatCheckboxModule,
    FontAwesomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
    constructor() {
      library.add(faExpand,faCompress);
    }
  }
