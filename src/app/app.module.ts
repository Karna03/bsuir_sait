import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { PractComponent } from './pract/pract.component';
import {FormsModule} from '@angular/forms';
import {TeoriaComponent} from './teoria/teoria.component';
import { HomeComponent } from './home/home.component';

import { FoiinpComponent} from './foiinp_1_1/foiinp.component';
import { FtominComponent} from './ftomin_1_2/ftomin.component';
import { OpossprComponent} from './oposspr_2_1/oposspr.component';
import { AgvsprComponent} from './agvspr_2_2/agvspr.component';
import { RtComponent} from './rt_2_3/rt.component';
import { OtComponent} from './ot_2_4/ot.component';
import { BtComponent} from './bt_2_5/bt.component';
import { MsnsComponent} from './msns_2_6/msns.component';
import {OsnsComponent} from './osns_2_7/osns.component';
import { MimintComponent} from './mimint_3_1/mimint.component';
import { MmComponent} from './mm_3_2/mm.component';
import { KminyComponent} from './kminy_3_3/kminy.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
},
  {
    path: 'practicheskie',
    component: PractComponent
  },
  {
    path: 'teoria',
    component: TeoriaComponent
  },
  {
      path: 'teoria/ОИиНД/1razdel' ,
      component: FoiinpComponent
    },
      {
        path: 'teoria/ОИиНД/2razdel' ,
        component: FtominComponent
      },
      {
        path: 'teoria/ФНС/1razdel' ,
        component: OpossprComponent
      },
      {
        path: 'teoria/ФНС/2razdel' ,
        component: AgvsprComponent
      },
      {
        path: 'teoria/ФНС/3razdel' ,
        component: RtComponent
      },
      {
        path: 'teoria/ФНС/4razdel' ,
        component: OtComponent
      },
      {
        path: 'teoria/ФНС/5razdel' ,
        component: BtComponent
      },
      {
        path: 'teoria/ФНС/6razdel' ,
        component: MsnsComponent
      },
      {
        path: 'teoria/ФНС/7razdel' ,
        component: OsnsComponent
      },
      {
        path: 'teoria/МиНУ/1razdel' ,
        component: MimintComponent
      },
      {
        path: 'teoria/МиНУ/2razdel' ,
        component: MmComponent
      },
      {
        path: 'teoria/МиНУ/3razdel',
        component: KminyComponent
      }
];

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    PractComponent,
    HomeComponent,
    FoiinpComponent,
    FtominComponent,
    OpossprComponent,
    AgvsprComponent,
    RtComponent,
    OtComponent,
    BtComponent,
    MsnsComponent,
    OsnsComponent,
    MimintComponent,
    MmComponent,
    KminyComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

