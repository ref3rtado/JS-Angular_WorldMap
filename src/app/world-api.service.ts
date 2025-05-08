/* Requirement C
NOTE: API response object paths update | response variable = apiResponse[1][0]
World Bank API Properties:
Calling      -> https://api.worldbank.org/v2/country/[svg path id]?format=json
Country Name -> response.name              -> countryName
Capital      -> response.capitalCity       -> capitalCity
Region       -> response.region.value      -> region
Income Level -> response.incomeLevel.value -> incomeLevel
Longitude    -> response.longitude         -> longitude
Latitude     -> response.latitude          -> latitude
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldAPIService {

  constructor(private http: HttpClient) {}
  //requirement G.1. Takes two letter country code from (click) and inserts it into API call
  getData(code: string) {
    console.log(`Getting info for country code: ${code}...`);
    return this.http.get(`https://api.worldbank.org/v2/country/${code}?format=json`)
  }
}
