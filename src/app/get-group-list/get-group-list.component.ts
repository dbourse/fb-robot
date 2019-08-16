import { Component, OnInit } from '@angular/core';
declare var FB: any;
@Component({
  selector: 'app-get-group-list',
  templateUrl: './get-group-list.component.html',
  styleUrls: ['./get-group-list.component.css']
})
export class GetGroupListComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
     (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '350690678979075',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  getGroups(){
    console.log("getting groups...");
    FB.api(
      "/10210973687858183/groups",
      function (response) {
        if (response && !response.error) {
          console.log(response)
        }
        else{
          console.log(response.error);
        }
      }
  );
  }

}