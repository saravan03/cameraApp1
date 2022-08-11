import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  videoRef: any;
  image: any = undefined;
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.videoRef = document.getElementById('video');
    console.log(this.videoRef);
    this.setupCamera();
  }
  setupCamera() {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 500, height: 653 },
        audio: false,
      })
      .then((stream) => {
        console.log(stream);
        this.videoRef.srcObject = stream;
      })
      .catch((error) => {
        alert(error);
      });
  }
  capture() {
    let canvas = document.createElement('canvas');
    let video = document.getElementById('video');

    canvas.width = 500;
    canvas.height = 653;

    let ctx: any = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    this.image = canvas.toDataURL('image/jpeg');
    console.log(this.image);
  }

  public cancelImage() {
    location.reload();
  }
}
