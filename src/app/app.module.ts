import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from '@library/theme-selector/component/settings/settings.component';
import { MonacoEditorModule } from '@rickzhou/ngx-monaco-editor';
import { BasicSyntaxModule } from '@views/basic-syntax/basic-syntax.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, SettingsComponent, MonacoEditorModule.forRoot(), AppRoutingModule, BasicSyntaxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
