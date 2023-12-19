import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {SearchpageComponent} from './components/searchpage/searchpage.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
import { RepositoryComponent } from './components/repository/repository.component';
// import { SwaggerComponent } from './swagger/swagger.component'; 

const routes: Routes = [
{path: '', component: HomeComponent},
{path : 'searchuser', component: SearchpageComponent},
{ path: 'create-repository', component: RepositoryComponent },
{path : 'user/:id',component: UserDetailPageComponent},
// { path: 'swagger', component: SwaggerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
