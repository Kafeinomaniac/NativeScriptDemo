import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { TNSFontIconModule } from "nativescript-ngx-fonticon";
import { TranslateModule } from "@ngx-translate/core";

import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";

@NgModule({
  imports: [NativeScriptModule, TNSFontIconModule, TranslateModule, BrowseRoutingModule],
  declarations: [BrowseComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BrowseModule {}
