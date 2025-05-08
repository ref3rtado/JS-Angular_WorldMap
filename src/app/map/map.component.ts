import { Component} from '@angular/core';
import { WorldAPIService } from '../world-api.service';
import { MoveDataService } from '../move-data.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent {
 
  constructor(private myAPI: WorldAPIService, private moveData: MoveDataService) {}

  //Requirement F
  getCountryId(event: MouseEvent) {
    const target = event.target as SVGPathElement;
    const countryCode: string = target.getAttribute('id') as string;
    //Requirement G.2a Sends two letter code to API service
    this.myAPI.getData(countryCode)
    .subscribe((response: object) => {
      //moveData sends the local variable (response) to InformationComponent for it to use on info card
      this.moveData.passData(response);
      } 
    )
  }

}
