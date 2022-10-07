import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// The @Component() decorator indicates that the following class is a component. @Component() also provides metadata about the component, including its selector, templates, and styles.
@Component({
  // identifies the component. By convention, Angular component selectors begin with the prefix app-, followed by the component name.
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})

// handles functionality for the component
export class ProductAlertsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent
  @Input() product: Product | undefined;

  // Configuring ProductAlertsComponent with an @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
}
