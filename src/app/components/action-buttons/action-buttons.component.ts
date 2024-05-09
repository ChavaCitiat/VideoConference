import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css'
})
export class ActionButtonsComponent implements OnInit {

  isAdmin: boolean = false;
  constructor(private actionService: ActionService,
    private participantService: ParticipantService) { }

  ngOnInit(): void {
    let user = 123//sessionService.getUserFromSession()
    this.participantService.participants$.subscribe(
      {
        next: (allParticipants) => {
          var admin = allParticipants.find(p => p.Permission == 1)
          this.isAdmin = admin?.ParticipantId == user
        },
        error: console.error
      }
    )
  }

  changeAction(actionId: number) {
    this.actionService.updateActionStatus(actionId)
  }


}
