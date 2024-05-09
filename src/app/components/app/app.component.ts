import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoParticipantContainerComponent } from '../video-participant-container/video-participant-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoParticipantContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
