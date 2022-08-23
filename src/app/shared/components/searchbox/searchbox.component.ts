import { Component, EventEmitter, Input, Output } from '@angular/core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-searchbox',
  templateUrl: 'searchbox.component.html',
  styleUrls: ['searchbox.component.scss'],
})
export class SearchboxComponent {
  searchIcon = faSearch

  @Input() searchQuery: string = ''
  @Output() search = new EventEmitter<string>()

  onSearch (evt: Event): void {
    evt.preventDefault()
    this.search.emit(this.searchQuery)
  }
}
