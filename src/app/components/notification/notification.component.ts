import { Input, Component } from '@angular/core';
import { DemandeService } from 'app/_services/demande.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
    notifications: any;
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    constructor(private demandeservise: DemandeService) {
        this.alerts.push({
            id: 2,
            strong: 'vous avez une demande!',
            type: 'info',
            message: 'une  nouvelle demande a été ajouté',
            icon: 'travel_info'
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }
    ngOnInit() {
    }
    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}

export interface IAlert {
    id: number;
    type: string;
    strong?: string;
    message: string;
    icon?: string;

}
