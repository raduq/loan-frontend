import {Component, Input} from '@angular/core';
import {Estimation} from "./estimation";
import {ApiService} from "../../api/ApiService";

@Component({
  selector: 'estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.css']
})
export class EstimationComponent {


  @Input() title: String = ""

  private _model: Estimation
  private _result: number
  private _error: string
  private _submitted: boolean

  constructor(private apiService: ApiService) {
    this._model = new Estimation(0, 0, 0);

    this._result = -1
    this._error = ""
    this._submitted = false
  }

  onSubmitObserver = {
    next: (result: number) => this._result = result,
    error: (err: Error) => this._error = err.message
  };

  onSubmit(): void {
    this.reset()
    this._submitted = true
    this.apiService.requestEMI(this._model).subscribe(this.onSubmitObserver)
  }

  private reset()
    :
    void {
    this
      ._error = ""
    this
      ._result = -1
  }

  get submitted(): boolean {
    return this._submitted;
  }

  get error(): string {
    return this._error;
  }

  get result(): number {
    return this._result;
  }

  get model(): Estimation {
    return this._model;
  }

  set model(value: Estimation) {
    this._model = value;
  }
}
