import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SideDrawerWrapperComponent } from "./components/sidedrawer/sidedrawer-wrapper/sidedrawer-wrapper.component";
import { SideDrawerComponent } from "./components/sidedrawer/sidedrawer.component";
import { SideDrawerItemComponent } from "./components/sidedrawer/sidedrawer-item/sidedrawer-item.component";

const routes: Routes = [
  {
    path: "",
    component: SideDrawerComponent,
    children: [
      {
        path: "",
        component: SideDrawerWrapperComponent,
        children: [{ path: "", redirectTo: "/video", pathMatch: "full" }]
      },
      { path: "home", loadChildren: "./components/home/home.module#HomeModule" },
      { path: "api", loadChildren: "./components/api/api.module#ApiModule" },
      { path: "guess", loadChildren: "./components/guess/guess.module#GuessModule" },
      { path: "video", loadChildren: "./components/video/video.module#VideoModule" },
      { path: "timebox", loadChildren: "./components/timebox/timebox.module#TimeboxModule" },
      { path: "browse", loadChildren: "./components/browse/browse.module#BrowseModule" }
    ]
  }
];

@NgModule({
  declarations: [SideDrawerItemComponent],
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule, SideDrawerItemComponent]
})
export class AppRoutingModule {}
