import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { InlineSVGModule } from 'ng-inline-svg-2';

import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { NgxEchartsModule } from 'ngx-echarts';
import { MonacoEditorModule } from '@rickzhou/ngx-monaco-editor';

import { SettingsComponent } from '@library/theme-selector/component/settings/settings.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from '@components/footer/footer.component';
import { HeroComponent } from '@components/hero/hero.component';
import { LoginComponent } from '@components/login/login.component';

import { WelcomeComponent } from '@views/welcome/welcome.component';
import { HomeComponent } from '@views/home/home.component';

import { FormsModule } from '@angular/forms';
import { RZTimeStatusChartModule } from '@rickzhou/ngx-cdk/time-status-chart';
import { BasicSyntaxModule } from '@views/basic-syntax/basic-syntax.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeroComponent, SettingsComponent, LoginComponent, WelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BasicSyntaxModule,
    NgxEchartsModule,
    MonacoEditorModule.forRoot(),
    InlineSVGModule,
    NzTableModule,
    NzDrawerModule,
    NzButtonModule,
    NzSwitchModule,
    NzSelectModule,
    NzModalModule,
    NzDropDownModule,
    NzInputModule,
    NzIconModule,
    NzCheckboxModule,
    RZTimeStatusChartModule,
  ],
  providers: [NzModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
