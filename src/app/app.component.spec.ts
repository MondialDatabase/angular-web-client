import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Component} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {

    // tslint:disable-next-line:component-selector
    @Component({ selector: 'router-outlet', template: '' })
    class RouterOutletStubComponent {}

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Mondial Database Explorer');
  });

  it('should render an Angular router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeDefined();
  });
});
