import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  
  createDb() {
    const users = [
      {
        firstName: "Dmitriy",
        lastName: "Barayev",
        avatarurl: "https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_960_720.png",
        address1: "123 Main Street",
        address2: "",
        city: "Dallas",
        state: "TX",
        zipCode: "70000",
        phone: "(718) 123-4567",
        phoneVerify: true,
        email: "dbarayev@github.com",
        emailVerify: true
      }
    ];
    return { users };
  }

}