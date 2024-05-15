import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadFeature = 'recipe';

  onNavigate(feature : string)
  {
    this.loadFeature =feature;
  }
}
