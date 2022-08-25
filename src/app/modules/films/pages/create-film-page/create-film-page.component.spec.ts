import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CreateFilmPageComponent } from './create-film-page.component'

describe('CreateFilmPageComponent', () => {
  let component: CreateFilmPageComponent
  let fixture: ComponentFixture<CreateFilmPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFilmPageComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(CreateFilmPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
