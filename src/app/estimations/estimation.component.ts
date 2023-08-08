import {Component, Input} from '@angular/core';
import {Estimation} from "./estimation";
import {ApiService} from "../api/ApiService";

@Component({
  selector: 'estimation-form',
  templateUrl: './estimation-form.component.html',
  styleUrls: ['./estimation-form.component.css']
})
export class EstimationFormComponent {

  @Input() title: String = ""

  constructor(private apiService: ApiService) {
  }

  model: Estimation = new Estimation(0, 0, 0);

  result: number = -1
  error: string = ""
  submitted: boolean = false

  onSubmitObserver = {
    next: (result: number) => this.result = result,
    error: (err: Error) => this.error = err.message
  };

  onSubmit(): void {
    this.reset()
    this.submitted = true

    this.apiService.requestEMI(this.model).subscribe(this.onSubmitObserver)
  }

  private reset(): void {
    this.error = ""
    this.result = -1
  }

}
