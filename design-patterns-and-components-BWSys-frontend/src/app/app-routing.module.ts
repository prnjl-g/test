import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UploadComponent } from './components/upload/upload.component';
import { DownloadComponent } from './components/download/download.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { SideNavbarComponent } from './components/home/side-navbar/side-navbar.component';
import { InfoComponent } from './components/info/info.component';
import { FullScreenTestComponent } from './components/full-screen-test/full-screen-test.component';


export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: SideNavbarComponent },
    { path: 'home/:id', component: InfoComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'download', component: DownloadComponent },
    { path: 'test', component: FullScreenTestComponent },
    { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

