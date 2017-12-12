"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocialShare = require("nativescript-social-share");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService, zone) {
        this.groceryListService = groceryListService;
        this.zone = zone;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = true;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.listLoaded = false;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.delete = function (groceryObject) {
        var _this = this;
        if (groceryObject === null || groceryObject.id === "") {
            alert("Invalid grocery item!");
            return;
        }
        this.groceryListService.delete(groceryObject.id)
            .subscribe(function () {
            _this.zone.run(function () {
                var i = _this.groceryList.indexOf(groceryObject);
                _this.groceryList.splice(i, 1);
            });
        }, function () {
            alert({
                message: "An error occurred while removing " + groceryObject.name + ".",
                okButtonText: "OK"
            });
        });
    };
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        moduleId: module.id,
        templateUrl: "./list.html",
        styleUrls: ["./list-common.css", "./list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService, core_1.NgZone])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRjtBQUdqRix1REFBeUQ7QUFHekQsa0ZBQStFO0FBUy9FLElBQWEsYUFBYTtJQU90Qix1QkFBb0Isa0JBQXNDLEVBQVUsSUFBWTtRQUE1RCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQU5oRixnQkFBVyxHQUFtQixFQUFFLENBQUM7UUFDakMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUdnRSxDQUFDO0lBRXBGLGdDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDN0IsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUN0QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtnQkFDbEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBd0JDO1FBdkJHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3hDLFNBQVMsQ0FDTixVQUFBLGFBQWE7WUFDVCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQ0Q7WUFDSSxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLGFBQXNCO1FBQTdCLGlCQW1CQztRQWxCRyxFQUFFLENBQUMsQ0FBQyxhQUFhLEtBQUssSUFBSSxJQUFJLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO2FBQy9DLFNBQVMsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNWLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQ0Q7WUFDSSxLQUFLLENBQUM7Z0JBQ0YsT0FBTyxFQUFFLG1DQUFtQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEdBQUcsR0FBRztnQkFDdkUsWUFBWSxFQUFFLElBQUk7YUFDckIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUNSLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQTVFRCxJQTRFQztBQXZFa0M7SUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs4QkFBbUIsaUJBQVU7dURBQUM7QUFMbkQsYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNsQyxDQUFDO3FDQVEwQyx5Q0FBa0IsRUFBZ0IsYUFBTTtHQVB2RSxhQUFhLENBNEV6QjtBQTVFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdab25lLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xyXG5cclxuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XHJcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbR3JvY2VyeUxpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcclxuICAgIGdyb2NlcnkgPSBcIlwiO1xyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcclxuICAgIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGlzdExvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcclxuICAgICAgICAgICAgbG9hZGVkR3JvY2VyaWVzLmZvckVhY2goKGdyb2NlcnlPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PVwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5hZGQodGhpcy5ncm9jZXJ5KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGdyb2NlcnlPYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKGdyb2NlcnlPYmplY3Q6IEdyb2NlcnkpIHtcclxuICAgICAgICBpZiAoZ3JvY2VyeU9iamVjdCA9PT0gbnVsbCB8fCBncm9jZXJ5T2JqZWN0LmlkID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBncm9jZXJ5IGl0ZW0hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0U2VydmljZS5kZWxldGUoZ3JvY2VyeU9iamVjdC5pZClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMuZ3JvY2VyeUxpc3QuaW5kZXhPZihncm9jZXJ5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZW1vdmluZyBcIiArIGdyb2NlcnlPYmplY3QubmFtZSArIFwiLlwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZSgpIHtcclxuICAgICAgICBsZXQgbGlzdFN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcclxuICAgICAgICAubWFwKGdyb2NlcnkgPT4gZ3JvY2VyeS5uYW1lKVxyXG4gICAgICAgIC5qb2luKFwiLCBcIilcclxuICAgICAgICAudHJpbSgpO1xyXG4gICAgICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0U3RyaW5nKTtcclxuICAgIH1cclxufSJdfQ==