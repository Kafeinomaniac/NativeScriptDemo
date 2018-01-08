import { Component, OnInit } from "@angular/core";

import { SideDrawerComponent } from "../sidedrawer/sidedrawer.component";

@Component({
  moduleId: module.id,
  selector: "Home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private _sidedrawerComponent: SideDrawerComponent) {}

  toggleDrawer() {
    this._sidedrawerComponent.toggleDrawer();
  }

  ngOnInit() {
    this._sidedrawerComponent.selectedPage = "home";
  }
}
