import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;  //Binding class to open 

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
   // }

    // Below code will not use to close the dropdown when we click anywhere on the screen  
    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }
}