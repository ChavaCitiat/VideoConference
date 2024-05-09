import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../models/participant';


@Component({
  selector: 'app-video-participant',
  standalone: true,
  imports: [],
  templateUrl: './video-participant.component.html',
  styleUrl: './video-participant.component.css'
})
export class VideoParticipantComponent implements OnInit {
  @Input() participant!: Participant;
  isCameraOn!: boolean;
  isMicrophoneOn!: boolean;
  actualParticipantIsMine!: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.isCameraOn = this.participant.ActionsStatus.find(action => action.ActionCode == 102)!.IsOn;
    this.isMicrophoneOn = this.participant.ActionsStatus.find(action => action.ActionCode == 101)!.IsOn;
    var user = 123//sessionService.getUserFromSession()
    this.actualParticipantIsMine = this.participant.ParticipantId == user
  }


}
