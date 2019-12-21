import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatButtonModule,MatIconModule} from '@angular/material/'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ServicesComponent } from './services/services.component';





import { StudyAustraliaComponent } from './study/study-australia/study-australia.component';
import { StudyFranceComponent } from './study/study-france/study-france.component';
import { StudyGermanyComponent } from './study/study-germany/study-germany.component';
import { StudyCanadaComponent } from './study/study-canada/study-canada.component';
import { StudyIrelandComponent } from './study/study-ireland/study-ireland.component';
import { StudyItalyComponent } from './study/study-italy/study-italy.component';
import { StudyNewzealandComponent } from './study/study-newzealand/study-newzealand.component';
import { StudyPolandComponent } from './study/study-poland/study-poland.component';
import { StudySouthkoreaComponent } from './study/study-southkorea/study-southkorea.component';
import { StudyUkComponent } from './study/study-uk/study-uk.component';
import { StudyUsaComponent } from './study/study-usa/study-usa.component';


import { MigrateAustraliaComponent } from './migrate/migrate-australia/migrate-australia.component';
import { MigrateFranceComponent } from './migrate/migrate-france/migrate-france.component';
import { MigrateGermanyComponent } from './migrate/migrate-germany/migrate-germany.component';
import { MigrateCanadaComponent } from './migrate/migrate-canada/migrate-canada.component';
import { MigrateIrelandComponent } from './migrate/migrate-ireland/migrate-ireland.component';
import { MigrateItalyComponent } from './migrate/migrate-italy/migrate-italy.component';
import { MigrateNewzealandComponent } from './migrate/migrate-newzealand/migrate-newzealand.component';
import { MigratePolandComponent } from './migrate/migrate-poland/migrate-poland.component';
import { MigrateSouthkoreaComponent } from './migrate/migrate-southkorea/migrate-southkorea.component';
import { MigrateUkComponent } from './migrate/migrate-uk/migrate-uk.component';
import { MigrateUsaComponent } from './migrate/migrate-usa/migrate-usa.component';
import { CostofstudyComponent } from './costofstudy/costofstudy.component';
import { QuickEnquiryComponent } from './quick-enquiry/quick-enquiry.component';
import { FormsModule }   from '@angular/forms';
import { ModelComponent } from './model/model.component';
import { IeltsCoachingComponent } from './services/ielts-coaching/ielts-coaching.component';
import { SettlementAssistanceComponent } from './services/settlement-assistance/settlement-assistance.component';
import { TradeTestComponent } from './services/trade-test/trade-test.component';
import { CareerGuidanceComponent } from './services/career-guidance/career-guidance.component';
import { HumanResourceComponent } from './services/human-resource/human-resource.component';
import { StudentVisaComponent } from './services/student-visa/student-visa.component';
import { ImmigrationComponent } from './services/immigration/immigration.component';
import { PreDepartureSupportComponent } from './services/pre-departure-support/pre-departure-support.component';
import { LoanAssistanceComponent } from './services/loan-assistance/loan-assistance.component';
import { AdmissionSupportComponent } from './services/admission-support/admission-support.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    JoinusComponent,
    StudyUsaComponent,
    StudyUkComponent,
    StudySouthkoreaComponent,
    StudyPolandComponent,
    StudyNewzealandComponent,
    StudyItalyComponent,
    StudyIrelandComponent,
    StudyCanadaComponent,
    StudyGermanyComponent,
    StudyFranceComponent,
    StudyAustraliaComponent,
    MigrateAustraliaComponent,
    MigrateFranceComponent,
    MigrateGermanyComponent,
    MigrateCanadaComponent,
    MigrateIrelandComponent,
    MigrateItalyComponent,
    MigrateNewzealandComponent,
    MigratePolandComponent,
    MigrateSouthkoreaComponent,
    MigrateUkComponent,
    MigrateUsaComponent,
    ServicesComponent,
    CostofstudyComponent,
    QuickEnquiryComponent,
    ModelComponent,
    IeltsCoachingComponent,
    SettlementAssistanceComponent,
    TradeTestComponent,
    CareerGuidanceComponent,
    HumanResourceComponent,
    StudentVisaComponent,
    ImmigrationComponent,
    PreDepartureSupportComponent,
    LoanAssistanceComponent,
    AdmissionSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    HttpClientModule,
    OwlModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
       // ngx-translate and the loader module
       TranslateModule.forRoot({
           loader: {
               provide: TranslateLoader,
               useFactory: HttpLoaderFactory,
               deps: [HttpClient]
           }
       })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}