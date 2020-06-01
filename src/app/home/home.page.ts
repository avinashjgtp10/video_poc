import { Component } from '@angular/core';
import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videoOpts : VideoOptions ;
  constructor(private videoPlayer : VideoPlayer) {
  
  }
  
  public playVideo(){
    console.log("calling")
      this.videoOpts = {volume : 1.0};
      this.videoPlayer.play('https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=109s').then(() => {
      console.log('video completed');
      }).catch(err => {
      console.log(err);
      });    
  }
  public stopPlayingVideo(){
      this.videoPlayer.close();
  }
  
  }