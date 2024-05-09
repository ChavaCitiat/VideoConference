import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../../services/discussion.service';
import { Discussion } from '../../models/discussion';

@Component({
  selector: 'app-discussion-header',
  standalone: true,
  imports: [],
  templateUrl: './discussion-header.component.html',
  styleUrl: './discussion-header.component.css'
})
export class DiscussionHeaderComponent implements OnInit {
/**
 *
 */

discussion:Discussion;
constructor(private discussionService:DiscussionService) {

    
}
  ngOnInit(discussionId:number): void {
   this.discussion= this.discussionService.getDiscussionDetails(discussionId)
  }
}
