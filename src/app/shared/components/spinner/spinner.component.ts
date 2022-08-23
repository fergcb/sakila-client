import { Component } from '@angular/core'

@Component({
  selector: 'app-spinner',
  template: `
    <progress aria-label="Loading content"></progress>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {}
