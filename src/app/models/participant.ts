
export interface Participant {
  ParticipantId: number,
  Name: string;
  Role: string;
  Permission: number;
  ActionsStatus: Action[];
  DiscussionId: string;
}

export interface Action {
  ActionCode: number;
  IsOn: boolean;
  DiscussionId: number;
  ParticipantId: number;
}


