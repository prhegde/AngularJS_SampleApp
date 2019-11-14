import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboard = [
      {
          header: 'Backend Card',
          block: 'A Backend Block',
          actionList: [
              {
                  action: 'Card Action'
              }
          ]
      }
  ];

  constructor() { }

    /**
     * @method getDashboardCards
     *  Method to get dashboard cards
     * @return {{header: string; block: string; actionList: {action: string}[]}[]}
     */
  getDashboardCards() {
      /* A Serivce call that would be similar to a the backend http call. */
    return this.dashboard;
      /*return this.http
          .get<NetworkPoolResponse>('/ui/api/networkpools')
          .pipe(catchError((error: HttpErrorResponse) => throwError(error)));*/
  }
}
