var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ContentChild, Input, Renderer2 } from '@angular/core';
var AnimatedHeaderComponent = /** @class */ (function () {
    function AnimatedHeaderComponent(renderer) {
        this.renderer = renderer;
        // How much opacity should be applied to the upper-parallax.
        // 0 = no opacity animation
        // 1 = 1 to 0 opacity
        // 2 = 1 to 0.5 opacity
        // 3 = 1. to 0.333 opacity
        // etc
        this.opacityFactor = 1;
        // Height of the ionic header at the top.
        this._ionHeaderHeight = 56; // TODO: maybe better to calculate this in case ionic changes the height in the future
    }
    AnimatedHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: check if all necessary elements are present, otherwise throw error
        var theIonContentElementRef = this.ionContent._elementRef;
        var theScrollContent = theIonContentElementRef.nativeElement.querySelector('.scroll-content');
        this._fixedContent = theIonContentElementRef.nativeElement.querySelector('.fixed-content');
        var thePaddingTopString = window.getComputedStyle(theScrollContent)['padding-top'];
        this._scrollPaddingTop = Number(thePaddingTopString.substring(0, thePaddingTopString.length - 2)) + 84;
        this._ionHeaderTitle = this.ionHeader.nativeElement.querySelector('ion-title');
        this._setTransitionClasses(0);
        // The fixed content contains the fading background image.
        // This needs to have the height of the top-padding + the the height of  so the image is visible
        // TODO: this should be more flexible. Should be working without the secondHeader
        var theSecondHeaderElementRef = this.secondHeader._elementRef;
        var theSecondHeaderHeightString = window.getComputedStyle(theSecondHeaderElementRef.nativeElement)['height'];
        var theSecondHeaderHeightAsNumber = Number(theSecondHeaderHeightString.substring(0, theSecondHeaderHeightString.length - 2));
        this.renderer.setStyle(this._fixedContent, 'height', this._scrollPaddingTop + theSecondHeaderHeightAsNumber + 'px');
        // Subscribe to the scroll-event
        this.ionContent.ionScroll.subscribe(function (event) {
            _this._setOpacityFactor(event.scrollTop);
            _this._setTransitionClasses(event.scrollTop);
        });
    };
    /**
     * Set the opacity of the background-image based on the scroll-position
     * @param {number} scrollTop
     * @private
     */
    AnimatedHeaderComponent.prototype._setOpacityFactor = function (scrollTop) {
        if (this.opacityFactor > 0) {
            var theNewHeaderHeight = this._scrollPaddingTop - (scrollTop / this.opacityFactor);
            if (theNewHeaderHeight < 0) {
                theNewHeaderHeight = 0;
            }
            var theNewOpacity = theNewHeaderHeight / this._scrollPaddingTop;
            this.renderer.setStyle(this._fixedContent, 'opacity', theNewOpacity.toString());
        }
    };
    /**
     * Add or remove the css-classes that trigger the transitions
     * @param {number} scrollTop
     * @private
     */
    AnimatedHeaderComponent.prototype._setTransitionClasses = function (scrollTop) {
        // 2 steps in the animation-process of the header:
        // 1. Make the header visible when top of parallax-bottom touches it
        if (scrollTop + this._ionHeaderHeight > this._scrollPaddingTop) {
            this.renderer.addClass(this.ionHeader.nativeElement, 'visible');
            this.renderer.removeClass(this.fixedMenuButton.nativeElement, 'visible');
        }
        else if (scrollTop + this._ionHeaderHeight < this._scrollPaddingTop) {
            this.renderer.removeClass(this.ionHeader.nativeElement, 'visible');
            this.renderer.addClass(this.fixedMenuButton.nativeElement, 'visible');
        }
        // 2. Show the the title in the header when the Parallax-bottom is no longer visible
        if (scrollTop > this._scrollPaddingTop) {
            this.renderer.addClass(this._ionHeaderTitle, 'animate');
        }
        else if (scrollTop < this._scrollPaddingTop) {
            this.renderer.removeClass(this._ionHeaderTitle, 'animate');
        }
    };
    __decorate([
        Input('opacityFactor'),
        __metadata("design:type", Number)
    ], AnimatedHeaderComponent.prototype, "opacityFactor", void 0);
    __decorate([
        ContentChild('ionHeader'),
        __metadata("design:type", Object)
    ], AnimatedHeaderComponent.prototype, "ionHeader", void 0);
    __decorate([
        ContentChild('ionContent'),
        __metadata("design:type", Object)
    ], AnimatedHeaderComponent.prototype, "ionContent", void 0);
    __decorate([
        ContentChild('fixedMenuButton'),
        __metadata("design:type", Object)
    ], AnimatedHeaderComponent.prototype, "fixedMenuButton", void 0);
    __decorate([
        ContentChild('secondHeader'),
        __metadata("design:type", Object)
    ], AnimatedHeaderComponent.prototype, "secondHeader", void 0);
    AnimatedHeaderComponent = __decorate([
        Component({
            selector: 'animated-header',
            templateUrl: 'animated-header.html'
        }),
        __metadata("design:paramtypes", [Renderer2])
    ], AnimatedHeaderComponent);
    return AnimatedHeaderComponent;
}());
export { AnimatedHeaderComponent };
//# sourceMappingURL=animated-header.js.map