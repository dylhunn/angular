const $c0$ = () => ({ foo: null });
const $c1$ = () => [];
const $c2$ = $a0$ => ({ foo: $a0$ });
// ...
MyApp.ɵcmp = /*@__PURE__*/ $r3$.ɵɵdefineComponent({
  type: MyApp,
  selectors: [["ng-component"]],
  standalone: false,
  decls: 2,
  vars: 6,
  consts: [[__AttributeMarker.Bindings__, "dir"]],
  template:  function MyApp_Template(rf, ctx) {
    if (rf & 1) {
      $r3$.ɵɵelement(0, "div", 0)(1, "div", 0);
    }
    if (rf & 2) {
      $r3$.ɵɵproperty("dir", $r3$.ɵɵpureFunction0(2, $c0$));
      $r3$.ɵɵadvance();
      $r3$.ɵɵproperty("dir", $r3$.ɵɵpureFunction1(4, $c2$, $r3$.ɵɵpureFunction0(3, $c1$)));
    }
  },
 encapsulation: 2
});
