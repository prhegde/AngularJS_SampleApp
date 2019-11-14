import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: Object;
  selectedActionText: string;
  source: string;
  constructor() { }

  ngOnInit() {
    this.dashboard = [
        {
          header: 'Workloads',
            block: 'Workload text',
            actionList: [
                {
                  action: 'Create VI'
                }
            ]
        },
        {
            header: 'Hosts',
            block: 'Hosts text',
            actionList: [
                {
                    action: 'Add Host'
                }
            ]
        },
        {
            header: 'vRealize',
            block: 'vRealize text',
            actionList: [
                {
                    action: 'Deploy vROPS'
                }
            ]
        },
        {
            header: 'LCM',
            block: 'LCM text',
            actionList: [
                {
                    action: 'Upgrade'
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
