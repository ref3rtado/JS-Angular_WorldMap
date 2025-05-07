import { Component, OnInit } from '@angular/core';
import { MoveDataService } from '../move-data.service';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent implements OnInit{ 
     
  constructor(private grabData: MoveDataService) {}
  
  response: any = {};
  countryName = 'Click on a country to get data.';
  capitalCity = '';
  region = '';
  incomeLevel = '';
  longitude = '';
  latitude = '';
  //API paths can be referenced in world-api.service.ts
  //Requirement G.2b API Response data parsed and placed in HTML info card.
  ngOnInit(): void {
    
    this.grabData.passData$.subscribe((apiResponse) => {
      console.log(`got response in InfoComponent:`);
      this.response = apiResponse;
      this.response = this.response[1][0];
      console.log(this.response);
      if (Object.keys(this.response).length !==0) {
        console.log('truthy is true');
        this.countryName = this.response.name;
        this.capitalCity = this.response.capitalCity;
        this.region = this.response.region.value;
        this.incomeLevel = this.response.incomeLevel.value;
        this.longitude = this.response.longitude;
        this.latitude = this.response.latitude;
      }
    });
  }
}

