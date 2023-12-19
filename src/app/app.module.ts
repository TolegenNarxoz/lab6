import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule here
import { AppComponent } from './app.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailPageComponent } from './components/user-detail-page/user-detail-page.component';
import { HomeComponent } from './components/home/home.component';
import { RepositoryComponent } from './components/repository/repository.component';
// import { SwaggerComponent } from './swagger/swagger.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    HeaderComponent,
    UserDetailPageComponent,
    HomeComponent,
    RepositoryComponent,
    // SwaggerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
