import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../shared/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: Object;
  selectedActionText: string;
  source: string;
  constructor(
      private dashboardService: DashboardService
  ) { }

  ngOnInit() {
      /*this.dashboardService.getDashboardCards();*/
    this.dashboard =[
        {
          header: 'VSAN',
            block: 'Default Storage',
            actionList: [
                {
                  action: 'Add host with VSAN storage type'
                }
            ]
        },
        {
            header: 'NFS',
            block: 'External Storage',
            actionList: [
                {
                    action: 'Add host with NFS storage type'
                }
            ]
        },
        {
            header: 'Fibre Channel',
            block: 'External Storage',
            actionList: [
                {
                    action: 'Add host with FC storage type'
                }
            ]
        },
        {
            header: 'VVOL',
            block: 'External Storage',
            actionList: [
                {
                    action: 'Add host with VVOL storage type'
                }
            ]
        }
    ];
  }

    /**
     * @Method actionnSelected
     *  Method to select an action
     */
  selectedAction(action: string) {
        this.selectedActionText = action;
  }
}
