import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  baseUrl: string
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrl = configService.readConfigValues().baseApiUrl
  }

  updateActionStatus(actionId: number) {
    var actualStatus = this.getActionObject(actionId);
    this.http.put(this.baseUrl + "/action/update", actualStatus)
  }

  getActionObject() {
    //get from participant service details of user action
  }

  muteAllParticipants(){
    //get discussion id and user is from service
    //call function from server that mute all the participant ()
  }

}
