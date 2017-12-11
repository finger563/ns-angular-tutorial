"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You're using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <StackLayout>\n      <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n      <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n      <Button [text]=\"isLoggingIn ? 'Sign In' : 'Sign Up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n      <Button [text]=\"isLoggingIn ? 'Sign Up' : 'Back to Groceries'\" (tap)=\"toggleDisplay()\"></Button>\n    </StackLayout>\n  ",
        styleUrls: [
            "pages/login/login-common.css",
            "pages/login/login.css"
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFvQjFDLElBQWEsWUFBWTtJQWxCekI7UUFtQkUsVUFBSyxHQUFHLCtCQUErQixDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBT3JCLENBQUM7SUFOQyw2QkFBTSxHQUFOO1FBQ0UsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksWUFBWTtJQWxCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxpbEJBVVQ7UUFDRCxTQUFTLEVBQUU7WUFDVCw4QkFBOEI7WUFDOUIsdUJBQXVCO1NBQ3hCO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBbKG5nTW9kZWwpXT1cImVtYWlsXCJcbiAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuICAgICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIEluJyA6ICdTaWduIFVwJ1wiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiBVcCcgOiAnQmFjayB0byBHcm9jZXJpZXMnXCIgKHRhcCk9XCJ0b2dnbGVEaXNwbGF5KClcIj48L0J1dHRvbj5cbiAgICA8L1N0YWNrTGF5b3V0PlxuICBgLFxuICBzdHlsZVVybHM6IFtcbiAgICBcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcbiAgICBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZW1haWwgPSBcIm5hdGl2ZXNjcmlwdHJvY2tzQHRlbGVyaWsuY29tXCI7XG4gIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgc3VibWl0KCkge1xuICAgIGFsZXJ0KFwiWW91J3JlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpO1xuICB9XG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59Il19