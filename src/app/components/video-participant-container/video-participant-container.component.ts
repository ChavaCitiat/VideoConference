import { Component, OnInit } from '@angular/core';
import { VideoParticipantComponent } from '../video-participant/video-participant.component';
import { ParticipantService } from '../../services/participant.service';
import { Observable } from 'rxjs';
import { Participant } from '../../models/participant';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-video-participant-container',
  standalone: true,
  imports: [VideoParticipantComponent, AsyncPipe],
  templateUrl: './video-participant-container.component.html',
  styleUrl: './video-participant-container.component.css'
})
export class VideoParticipantContainerComponent implements OnInit {

  participants$!: Observable<Participant[]>;
  constructor(private participantService: ParticipantService) {

  }
  ngOnInit(): void {
    this.participants$ = this.participantService.participants$;

  }


}
