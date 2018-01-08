import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { SideDrawerComponent } from "../sidedrawer/sidedrawer.component";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);
// https://docs.nativescript.org/angular/plugins/angular-third-party.html#simple-elements

@Component({
  moduleId: module.id,
  selector: "Video",
  templateUrl: "video.component.html"
})
export class VideoComponent implements OnInit {
  @ViewChild("videoplayer") VideoPlayer: ElementRef;
  isVideoVisible: boolean = false;

  constructor(private _sidedrawerComponent: SideDrawerComponent) {}

  toggleDrawer() {
    this._sidedrawerComponent.toggleDrawer();
  }

  ngOnInit() {}

  playVideo() {
    this.isVideoVisible = true;
    this.VideoPlayer.nativeElement.play();
  }

  videoFinished() {
    alert("Video finished!");
  }
}
