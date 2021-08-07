import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[onlyNumber]'
})
export class OnlyNumberDirective {

  regexStr = '^[0-9]*$';

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    let e = <KeyboardEvent>event;
      if (
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || (e.keyCode === 65 && e.ctrlKey) || (e.keyCode === 67 && e.ctrlKey) || (e.keyCode === 86 && e.ctrlKey) || (e.keyCode === 88 && e.ctrlKey) || (e.keyCode >= 35 && e.keyCode <= 39) || (e.keyCode === 107) || (e.keyCode === 187)) {
        // let it happen, don't do anything
        return;
      }
      let ch = String.fromCharCode(e.keyCode);
      let regEx = new RegExp(this.regexStr);
      if (regEx.test(ch)) {
        return;
      } else if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
  }
}
