import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable} from 'rxjs';
import {Estimation} from "../components/estimations/estimation";

@Injectable({providedIn: 'root'})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    requestEMI(estimation: Estimation): Observable<any> {
        const body = JSON.stringify(estimation);
        const headers = {'content-type': 'application/json'}
        return this.http.post('/api/loans/estimations', body, {'headers': headers})
            .pipe(
                catchError((err) => {
                        throw new DOMException(err.error.message);
                    }
                )
            )
    }

}
