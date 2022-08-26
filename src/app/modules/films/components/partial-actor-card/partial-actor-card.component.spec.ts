import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PartialActorCardComponent } from './partial-actor-card.component'

describe('ActorCardComponent', () => {
  let component: PartialActorCardComponent
  let fixture: ComponentFixture<PartialActorCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartialActorCardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PartialActorCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
