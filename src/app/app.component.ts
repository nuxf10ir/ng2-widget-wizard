import { Component } from '@angular/core';

interface IHotel {
  _id: string,
  index: number,
  name: string,
  address: string,
  phone: string,
  pictures: string[],
  weather: {
    water: number,
    air: number
  },
  follow: {
    following: number,
    followers: number
  },
  tags: string[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public hotelsList:Array<IHotel> = [
    {
      "tags": [
        "tourism",
        "tourism"
      ],
      "follow": {
        "following": 1212,
        "followers": 2743
      },
      "weather": {
        "water": 21,
        "air": 26
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/0/",
        "http://lorempixel.com/50/50/nighlife/0/"
      ],
      "phone": "+1 (997) 493-3204",
      "address": "284 Sullivan Street, Katonah, Louisiana, 1085",
      "name": "Inrt",
      "index": 0,
      "_id": "5811409c7359186796d1c33d"
    },
    {
      "tags": [
        "excursion"
      ],
      "follow": {
        "following": 912,
        "followers": 2976
      },
      "weather": {
        "water": 18,
        "air": 25
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/1/",
        "http://lorempixel.com/50/50/nighlife/1/"
      ],
      "phone": "+1 (844) 589-3637",
      "address": "895 McKinley Avenue, Albrightsville, Ohio, 3129",
      "name": "Lingoage",
      "index": 1,
      "_id": "5811409c79ce0d5625a3c55e"
    },
    {
      "tags": [
        "tourism",
        "recreation"
      ],
      "follow": {
        "following": 508,
        "followers": 1773
      },
      "weather": {
        "water": 23,
        "air": 25
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/2/",
        "http://lorempixel.com/50/50/nighlife/2/"
      ],
      "phone": "+1 (994) 502-3595",
      "address": "961 Glendale Court, Inkerman, Delaware, 4767",
      "name": "Bluplanet",
      "index": 2,
      "_id": "5811409c5e01d6bf2358e8a2"
    },
    {
      "tags": [
        "fishing",
        "recreation",
        "excursion"
      ],
      "follow": {
        "following": 540,
        "followers": 2996
      },
      "weather": {
        "water": 18,
        "air": 24
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/3/",
        "http://lorempixel.com/50/50/nighlife/3/"
      ],
      "phone": "+1 (810) 472-2510",
      "address": "516 Williams Place, Rockingham, Alaska, 6804",
      "name": "Pivitol",
      "index": 3,
      "_id": "5811409c444740f1604ea8b3"
    },
    {
      "tags": [
        "excursion",
        "fishing"
      ],
      "follow": {
        "following": 526,
        "followers": 1821
      },
      "weather": {
        "water": 22,
        "air": 22
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/4/",
        "http://lorempixel.com/50/50/nighlife/4/"
      ],
      "phone": "+1 (908) 560-3342",
      "address": "271 Ridge Boulevard, Cartwright, Missouri, 1599",
      "name": "Codact",
      "index": 4,
      "_id": "5811409c72fd6d1cb0db03e4"
    },
    {
      "tags": [
        "recreation",
        "recreation"
      ],
      "follow": {
        "following": 1407,
        "followers": 2847
      },
      "weather": {
        "water": 21,
        "air": 26
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/5/",
        "http://lorempixel.com/50/50/nighlife/5/"
      ],
      "phone": "+1 (869) 556-2395",
      "address": "473 Stryker Court, Harleigh, Oklahoma, 3271",
      "name": "Gallaxia",
      "index": 5,
      "_id": "5811409c6395c4a68d339467"
    },
    {
      "tags": [
        "recreation"
      ],
      "follow": {
        "following": 996,
        "followers": 1799
      },
      "weather": {
        "water": 22,
        "air": 24
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/6/",
        "http://lorempixel.com/50/50/nighlife/6/"
      ],
      "phone": "+1 (821) 491-3914",
      "address": "366 Dunne Place, Westmoreland, Maine, 1314",
      "name": "Firewax",
      "index": 6,
      "_id": "5811409c6c9b5ae15c873074"
    },
    {
      "tags": [
        "fishing"
      ],
      "follow": {
        "following": 900,
        "followers": 1583
      },
      "weather": {
        "water": 19,
        "air": 29
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/7/",
        "http://lorempixel.com/50/50/nighlife/7/"
      ],
      "phone": "+1 (946) 447-3905",
      "address": "155 Rodney Street, Lorraine, Idaho, 6533",
      "name": "Xplor",
      "index": 7,
      "_id": "5811409c0c82fcc0d17a766e"
    },
    {
      "tags": [
        "tourism",
        "fishing",
        "tourism"
      ],
      "follow": {
        "following": 603,
        "followers": 2326
      },
      "weather": {
        "water": 20,
        "air": 29
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/8/",
        "http://lorempixel.com/50/50/nighlife/8/"
      ],
      "phone": "+1 (823) 507-2380",
      "address": "474 Riverdale Avenue, Delco, Wisconsin, 3085",
      "name": "Aeora",
      "index": 8,
      "_id": "5811409c9398169c6f04426d"
    },
    {
      "tags": [
        "fishing",
        "tourism"
      ],
      "follow": {
        "following": 1250,
        "followers": 2463
      },
      "weather": {
        "water": 19,
        "air": 28
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/9/",
        "http://lorempixel.com/50/50/nighlife/9/"
      ],
      "phone": "+1 (888) 506-2333",
      "address": "159 Elmwood Avenue, Townsend, Palau, 281",
      "name": "Exozent",
      "index": 9,
      "_id": "5811409c354530c5aa39ab9a"
    },
    {
      "tags": [
        "tourism"
      ],
      "follow": {
        "following": 1249,
        "followers": 2705
      },
      "weather": {
        "water": 21,
        "air": 29
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/10/",
        "http://lorempixel.com/50/50/nighlife/10/"
      ],
      "phone": "+1 (915) 491-2862",
      "address": "248 Hall Street, Draper, Colorado, 8673",
      "name": "Ronbert",
      "index": 10,
      "_id": "5811409c97adf1a3bc746b86"
    },
    {
      "tags": [
        "fishing"
      ],
      "follow": {
        "following": 1249,
        "followers": 2314
      },
      "weather": {
        "water": 22,
        "air": 29
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/11/",
        "http://lorempixel.com/50/50/nighlife/11/"
      ],
      "phone": "+1 (841) 484-3063",
      "address": "569 Wogan Terrace, Loma, Nebraska, 6648",
      "name": "Nipaz",
      "index": 11,
      "_id": "5811409cf8a3d053c9dca931"
    },
    {
      "tags": [
        "recreation"
      ],
      "follow": {
        "following": 1015,
        "followers": 2277
      },
      "weather": {
        "water": 22,
        "air": 27
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/12/",
        "http://lorempixel.com/50/50/nighlife/12/"
      ],
      "phone": "+1 (892) 580-3100",
      "address": "623 Lyme Avenue, Loomis, Oregon, 1531",
      "name": "Quilm",
      "index": 12,
      "_id": "5811409c16b723b38fa0cbd4"
    },
    {
      "tags": [
        "excursion",
        "fishing"
      ],
      "follow": {
        "following": 518,
        "followers": 2062
      },
      "weather": {
        "water": 18,
        "air": 21
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/13/",
        "http://lorempixel.com/50/50/nighlife/13/"
      ],
      "phone": "+1 (842) 593-2020",
      "address": "102 Forrest Street, Taft, Minnesota, 4327",
      "name": "Digifad",
      "index": 13,
      "_id": "5811409c02f881f1961b1aee"
    },
    {
      "tags": [
        "tourism"
      ],
      "follow": {
        "following": 1059,
        "followers": 1953
      },
      "weather": {
        "water": 22,
        "air": 26
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/14/",
        "http://lorempixel.com/50/50/nighlife/14/"
      ],
      "phone": "+1 (981) 548-3522",
      "address": "542 Autumn Avenue, Hiwasse, West Virginia, 6685",
      "name": "Dogtown",
      "index": 14,
      "_id": "5811409c1b78fee6b891fb19"
    },
    {
      "tags": [
        "fishing",
        "tourism"
      ],
      "follow": {
        "following": 596,
        "followers": 2174
      },
      "weather": {
        "water": 22,
        "air": 24
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/15/",
        "http://lorempixel.com/50/50/nighlife/15/"
      ],
      "phone": "+1 (927) 424-3763",
      "address": "512 Johnson Avenue, Shepardsville, Massachusetts, 5059",
      "name": "Spherix",
      "index": 15,
      "_id": "5811409c74a74c2797b39956"
    },
    {
      "tags": [
        "tourism",
        "tourism"
      ],
      "follow": {
        "following": 964,
        "followers": 1536
      },
      "weather": {
        "water": 23,
        "air": 20
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/16/",
        "http://lorempixel.com/50/50/nighlife/16/"
      ],
      "phone": "+1 (800) 476-2255",
      "address": "790 Terrace Place, Abiquiu, New Mexico, 8630",
      "name": "Menbrain",
      "index": 16,
      "_id": "5811409c8fe7774c6c16f8c4"
    },
    {
      "tags": [
        "excursion",
        "recreation",
        "tourism"
      ],
      "follow": {
        "following": 1006,
        "followers": 1849
      },
      "weather": {
        "water": 23,
        "air": 27
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/17/",
        "http://lorempixel.com/50/50/nighlife/17/"
      ],
      "phone": "+1 (832) 551-2444",
      "address": "385 Judge Street, Foscoe, Washington, 3183",
      "name": "Golistic",
      "index": 17,
      "_id": "5811409cfad608379019023d"
    },
    {
      "tags": [
        "recreation",
        "excursion",
        "tourism"
      ],
      "follow": {
        "following": 885,
        "followers": 2852
      },
      "weather": {
        "water": 20,
        "air": 21
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/18/",
        "http://lorempixel.com/50/50/nighlife/18/"
      ],
      "phone": "+1 (823) 443-2374",
      "address": "158 Kiely Place, Bartley, Alabama, 6838",
      "name": "Combogen",
      "index": 18,
      "_id": "5811409c96afc5d2bb0cef54"
    },
    {
      "tags": [
        "recreation",
        "excursion"
      ],
      "follow": {
        "following": 1347,
        "followers": 2787
      },
      "weather": {
        "water": 25,
        "air": 25
      },
      "pictures": [
        "http://lorempixel.com/50/50/sports/19/",
        "http://lorempixel.com/50/50/nighlife/19/"
      ],
      "phone": "+1 (872) 488-2069",
      "address": "423 Christopher Avenue, Emerald, Kansas, 3082",
      "name": "Orboid",
      "index": 19,
      "_id": "5811409cf315db4ef37f95ce"
    }
  ]

  public currentHotel:IHotel = this.hotelsList[0];

  getCurrentHotel():IHotel {
    return this.currentHotel
  }

  setCurrentHotel(hotel:IHotel):void {
    this.currentHotel = hotel;
    console.log(hotel);
  }





}
