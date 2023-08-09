import { TestBed } from '@angular/core/testing';
import {ErrorMessageComponent} from "./error-message.component";

describe('ErrorMessageComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ErrorMessageComponent]
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ErrorMessageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should component have error message', () => {
    const fixture = TestBed.createComponent(ErrorMessageComponent);
    const component = fixture.componentInstance;
    component.message = "Some error"
    fixture.detectChanges()
    expect(component.message).toEqual('Some error');
  });
});
