import { Component, OnInit } from '@angular/core'
import { faRightFromBracket, faUser, faUserLock, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { User } from 'src/app/modules/user/models/User'
import { UserService } from 'src/app/modules/user/services/user/user.service'

@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
  styleUrls: ['./user-controls.component.scss'],
})
export class UserControlsComponent implements OnInit {
  userIcon!: IconDefinition
  logoutIcon = faRightFromBracket

  user: User | null = null

  showActions = false

  constructor (
    private readonly userService: UserService,
  ) {}

  ngOnInit (): void {
    this.userService.init().subscribe(user => {
      this.user = user
      this.userIcon = user?.group === 'ADMIN' ? faUserLock : faUser
    })
  }

  get loggedIn (): boolean {
    return this.user !== null
  }

  onLogout (): void {
    this.userService.logout()
    this.user = null
  }
}
