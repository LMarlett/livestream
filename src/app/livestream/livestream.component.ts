import { Component, OnInit } from '@angular/core';
// declare const Twitch: any;
declare const SlidesLiveEmbed: any;

@Component({
    selector: 'app-livestream',
    templateUrl: './livestream.component.html',
    styleUrls: ['./livestream.component.css'],
    standalone: false
})
export class LivestreamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //      var options = {
  //         width: 700,
  //         height: 400,
  //         channel: "shroud",
  //         video: "4ee488c07cb824ba34a62ee69cb40d57",
  //         collection: "156",
  //       };
  //       var player = new Twitch.Player("<player div ID>", options);
  //       player.setVolume(0.5);
  //    }
  // }



   var embed = new SlidesLiveEmbed("video-embed", {
      locale: "en",
      autoPlay: true,
      live: true,
      account: "csforall",
                    folder: "csforall-summit-2019",
      onError: function (e) {
          console.log("Live stream not active, yet.");

          setTimeout(function () { embed.reload(); }, 60000);
      },
      onLoad: function () {
          console.log("Live stream loaded.");

      }
  });
 }
}