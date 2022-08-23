import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Page } from '../../models/Page'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input()
  public page!: Page

  @Input()
  public disabled: boolean = false

  @Output()
  public prev: EventEmitter<Event> = new EventEmitter()

  @Output()
  public next: EventEmitter<Event> = new EventEmitter()

  onClickPrev (evt: Event): void {
    evt.preventDefault()
    this.prev.emit(evt)
  }

  onClickNext (evt: Event): void {
    evt.preventDefault()
    this.next.emit(evt)
  }
}
