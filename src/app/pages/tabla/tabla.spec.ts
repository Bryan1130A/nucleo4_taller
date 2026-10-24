import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Tabla } from './tabla';

describe('Tabla', () => {
  let component: Tabla;
  let fixture: ComponentFixture<Tabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabla],
      providers: [provideRouter([]), provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tabla);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
