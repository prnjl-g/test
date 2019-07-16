import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen-test',
  templateUrl: './full-screen-test.component.html',
  styleUrls: ['./full-screen-test.component.css']
})
export class FullScreenTestComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private document: any) {}
    elem;
  
    ngOnInit() {
      //this.elem = document.documentElement;
      this.elem = document.getElementById("navbarSupportedContent")
    }
  
    openFullscreen() {
      if (this.elem.requestFullscreen){
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    }
  
    /* Close fullscreen */
    closeFullscreen() {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
}


