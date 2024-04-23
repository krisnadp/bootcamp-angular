import { Component } from '@angular/core';
import { DataUserInterface } from './data-user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  bgColor: string = 'bg-slate-50';

  datas: DataUserInterface[] = [
    {"id":1,"first_name":"Mathe","last_name":"Attril","email":"mattril0@wufoo.com","gender":"Male","latest_transaction":"5/15/2023","currency":"IDR"},
    {"id":2,"first_name":"Darice","last_name":"Guidelli","email":"dguidelli1@youtu.be","gender":"Female","latest_transaction":"7/16/2023","currency":"IDR"},
    {"id":3,"first_name":"Aurel","last_name":"Antonsen","email":"aantonsen2@yahoo.com","gender":"Female","latest_transaction":"3/27/2024","currency":"USD"},
    {"id":4,"first_name":"Siusan","last_name":"Simchenko","email":"ssimchenko3@engadget.com","gender":"Female","latest_transaction":"5/8/2023","currency":"EURO"},
    {"id":5,"first_name":"Wilhelmine","last_name":"Marde","email":"wmarde4@homestead.com","gender":"Agender","latest_transaction":"10/4/2023","currency":"EURO"},
    {"id":6,"first_name":"Latia","last_name":"Papierz","email":"lpapierz5@yellowbook.com","gender":"Female","latest_transaction":"9/3/2023","currency":"EURO"},
    {"id":7,"first_name":"Raquel","last_name":"Jeannard","email":"rjeannard6@paypal.com","gender":"Female","latest_transaction":"4/6/2024","currency":"EURO"},
    {"id":8,"first_name":"Cherye","last_name":"Parker","email":"cparker7@theglobeandmail.com","gender":"Female","latest_transaction":"11/30/2023","currency":"USD"},
    {"id":9,"first_name":"Mic","last_name":"Insull","email":"minsull8@wisc.edu","gender":"Male","latest_transaction":"11/16/2023","currency":"EURO"},
    {"id":10,"first_name":"Minor","last_name":"Brideaux","email":"mbrideaux9@ow.ly","gender":"Male","latest_transaction":"9/21/2023","currency":"EURO"}
  ]

  rowColor(gender: string) {
    if (gender === 'Male') {
      return this.bgColor = 'bg-blue-400';
    } else if (gender === 'Female') {
      return this.bgColor = 'bg-pink-400';
    } else {
      return this.bgColor = 'bg-slate-50';
    }
  }

}
