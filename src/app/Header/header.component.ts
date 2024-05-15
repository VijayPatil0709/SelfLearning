import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html'
})

export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>(); //passing the data from parent component to child Component
    onSelect(feature : string)
    {
        this.featureSelected.emit(feature);
    }
}