import {TestBed} from '@angular/core/testing';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EstimationComponent} from "./estimation.component";
import {ErrorMessageComponent} from "../error/error-message.component";

describe('EstimationComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [EstimationComponent, ErrorMessageComponent],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
    ]
  }));

  it('should create the EstimationComponent', () => {
    const fixture = TestBed.createComponent(EstimationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should component have default fields', () => {
    const fixture = TestBed.createComponent(EstimationComponent);
    const component = fixture.componentInstance;
    expect(component.model.loanValue).toBe(0);
    expect(component.model.yearlyInterestRate).toBe(0);
    expect(component.model.loanTermInYears).toBe(0);
    expect(component.error).toBe("");
    expect(component.submitted).toBeFalse();
  });
});
