import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "my-app",
  moduleId: module.id,
  providers: [UserService],
  templateUrl: "./login.html",
  styleUrls: ["./login-common.css", "./login.css"],
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;

  @ViewChild("container") container: ElementRef;
  @ViewChild("icon") icon: ElementRef;

  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
    .subscribe(
        () => this.router.navigate(["/list"]),
        (error) => alert("Unfortunately we could not find your account.")
    );
  }

  signUp() {
    this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
    );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    // animate the background of the container
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
      duration: 200
    });
    // animate the rotation of the icon
    let icon = <View>this.icon.nativeElement;
    let definitions = new Array<AnimationDefinition>();
    definitions.push({target: icon, rotate: 360, scale: {x:1.1, y:1.1}, duration: 200 });
    definitions.push({target: icon, rotate: 0, scale: {x:1, y:1}, duration: 200 });
    var playSequentially = true;
    var animationSet = new Animation(definitions, playSequentially);
    animationSet.play().then(() => {
        //console.log("Animation finished");
    })
    .catch((e) => {
        console.log(e.message);
    });
  }
}