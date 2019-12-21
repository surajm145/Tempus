import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
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


import{ IeltsCoachingComponent } from './services/ielts-coaching/ielts-coaching.component';
import { SettlementAssistanceComponent } from './services/settlement-assistance/settlement-assistance.component';
import { TradeTestComponent } from './services/trade-test/trade-test.component';
import { CareerGuidanceComponent } from './services/career-guidance/career-guidance.component';
import { HumanResourceComponent } from './services/human-resource/human-resource.component';
import { StudentVisaComponent } from './services/student-visa/student-visa.component';
import { ImmigrationComponent } from './services/immigration/immigration.component';
import { PreDepartureSupportComponent } from './services/pre-departure-support/pre-departure-support.component';
import { LoanAssistanceComponent } from './services/loan-assistance/loan-assistance.component';
import { AdmissionSupportComponent } from './services/admission-support/admission-support.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'joinus',
    component: JoinusComponent
  },
  {
    path:'services',
    component: ServicesComponent
  },
  {
    path:'costofstudy',
    component: CostofstudyComponent
  },
  {
    path: 'study-australia',
    component: StudyAustraliaComponent
  },
  {
    path: 'study-france',
    component: StudyFranceComponent
  },
  {
    path: 'study-germany',
    component: StudyGermanyComponent
  },
  {
    path: 'study-canada',
    component: StudyCanadaComponent
  },
  {
    path: 'study-ireland',
    component: StudyIrelandComponent
  },
  {
    path: 'study-italy',
    component: StudyItalyComponent
  },
  {
    path: 'study-newzealand',
    component: StudyNewzealandComponent
  },
  {
    path: 'study-poland',
    component: StudyPolandComponent
  },
  {
    path: 'study-southkorea',
    component: StudySouthkoreaComponent
  },
  {
    path: 'study-uk',
    component: StudyUkComponent
  },
  {
    path: 'study-usa',
    component: StudyUsaComponent
  },

  {
    path: 'migrate-australia',
    component: MigrateAustraliaComponent
  },
  {
    path: 'migrate-france',
    component: MigrateFranceComponent
  },
  {
    path: 'migrate-germany',
    component: MigrateGermanyComponent
  },
  {
    path: 'migrate-canada',
    component: MigrateCanadaComponent
  },
  {
    path: 'migrate-ireland',
    component: MigrateIrelandComponent
  },
  {
    path: 'migrate-italy',
    component: MigrateItalyComponent
  },
  {
    path: 'migrate-newzealand',
    component: MigrateNewzealandComponent
  },
  {
    path: 'migrate-poland',
    component: MigratePolandComponent
  },
  {
    path: 'migrate-southkorea',
    component: MigrateSouthkoreaComponent
  },
  {
    path: 'migrate-uk',
    component: MigrateUkComponent
  },
  {
    path: 'migrate-usa',
    component: MigrateUsaComponent
  },
  {
    path: 'services/ielts-coaching',
    component: IeltsCoachingComponent
  },
   {
    path: 'services/settlement-assistance',
    component: SettlementAssistanceComponent
  },
  {
    path: 'services/trade-test',
    component: TradeTestComponent
  },
  {
    path: 'services/career-guidance',
    component: CareerGuidanceComponent
  },
  {
    path: 'services/human-resource',
    component: HumanResourceComponent
  },
  {
    path: 'services/student-visa',
    component: StudentVisaComponent
  },
  {
    path: 'services/immigration',
    component: ImmigrationComponent
  },
  {
    path: 'services/pre-departure-support',
    component: PreDepartureSupportComponent
  },
  {
    path: 'services/loan-assistance',
    component: LoanAssistanceComponent
  },
  {
    path: 'services/admission-support',
    component: AdmissionSupportComponent
  },


  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
