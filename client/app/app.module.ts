import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent }  from './app.component';
import { ConversationComponent } from './components/conversation/conversation.component'; 


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ConversationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
