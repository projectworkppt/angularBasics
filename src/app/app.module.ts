import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SellerComponent } from './seller/seller.component';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesService} from './services/countries.service';
import { HttpClientModule} from '@angular/common/http';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';
import { UppercaseConverterService} from './services/uppercase-converter.service';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SellerComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    CountriesComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CountriesService,UppercaseConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }