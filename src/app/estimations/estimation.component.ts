import {Component} from '@angular/core';
import {Estimation} from "./estimation";
import {ApiService} from "../api/ApiService";

@Component({
  selector: 'estimation-form',
  templateUrl: './estimation-form.component.html',
  styleUrls: ['./estimation-form.component.css']
})
export class EstimationFormComponent {

  constructor(private apiService: ApiService) {
  }

  model = new Estimation(0, 0, 0);

  result: number = -1
  error: string = ""
  submitted = false;

  onSubmitObserver = {
    next: (result: number) => this.result = result,
    error: (err: Error) => this.error = err.message
  };

  onSubmit() {
    this.error = ""
    this.submitted = true;

    this.apiService.requestEMI(this.model).subscribe(this.onSubmitObserver)
  }

}
