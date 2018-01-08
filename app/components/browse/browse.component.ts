import { Component, OnInit } from "@angular/core";

import { SideDrawerComponent } from "../sidedrawer/sidedrawer.component";

@Component({
  moduleId: module.id,
  selector: "Browse",
  templateUrl: "browse.component.html"
})
export class BrowseComponent implements OnInit {
  constructor(private _sidedrawerComponent: SideDrawerComponent) {}

  ngOnInit() {
    this._sidedrawerComponent.selectedPage = "browse";
  }

  toggleDrawer() {
    this._sidedrawerComponent.toggleDrawer();
  }
}
