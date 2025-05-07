import { Component } from '@angular/core';
import { InformationComponent } from '../information/information.component';
import { MapComponent } from '../map/map.component';
import { WorldAPIService } from '../world-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InformationComponent, MapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
