import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";
import { Animation, AnimationDefinition } from "ui/animation";

import { setHintColor } from "../../utils/hint-util";
import { TextField } from "ui/text-field";

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
  @ViewChild("email") email: ElementRef;
  @ViewChild("password") password: ElementRef;

  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
    this.page.addCss("Page { background-repeat: no-repeat; background-size: 100% 100%; }");
  }

  setTextFieldColors() {
    let emailTextField = <TextField>this.email.nativeElement;
    let passwordTextField = <TextField>this.password.nativeElement;

    let mainTextColor = new Color(this.isLoggingIn ? "black" : "#C4AFB4");
    emailTextField.color = mainTextColor;
    passwordTextField.color = mainTextColor;

    let hintColor = new Color(this.isLoggingIn ? "#AcA6A7" : "#C4AFB4");
    setHintColor({ view: emailTextField, color: hintColor });
    setHintColor({ view: passwordTextField, color: hintColor });
  }

  submit() {
    if (!this.user.isValidEmail()) {
      alert("Enter a valid email address.");
      return;
    }
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
    this.setTextFieldColors();
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