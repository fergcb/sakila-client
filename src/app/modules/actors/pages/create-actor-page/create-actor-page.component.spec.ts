import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateActorPageComponent } from './create-actor-page.component'

describe('CreateActorPageComponent', () => {
  let component: CreateActorPageComponent
  let fixture: ComponentFixture<CreateActorPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateActorPageComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(CreateActorPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
