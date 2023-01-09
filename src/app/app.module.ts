import { UpperCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PipeExampleComponent } from './page/pipe-example/pipe-example.component';
import { PrintListPipe } from './print-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    PrintListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UpperCasePipe,
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
