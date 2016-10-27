import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

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

interface ITag {
    title: string,
    value: string
}

@Component({
	selector: 'app-widget-list',
	templateUrl: './widget-list.component.html',
	styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {

	@Input()
	hotels;

	@Output() listItemClicks = new EventEmitter();


    public tagsList:Array<ITag> = [
        {
            title: "Отдых",
            value: "recreation"
        },
        {
            title: "Рыбалка",
            value: "fishing"
        },
        {
            title: "Экскурсии",
            value: "excursion"
        },
        {
            title: "Туризм",
            value: "tourism"
        }
    ];

    public currentTag:ITag;

    public filteredHotels:Array<IHotel>;

	constructor() {
	}

	ngOnInit() {
        this.listItemClicks.emit(this.hotels[0]);
    }

    listItemClick(hotel) {
        this.listItemClicks.emit(hotel);
    }

    getCurrentTag():ITag {
        return this.currentTag;
    }

    setCurrentTag(tag:ITag):void {
        this.currentTag = tag;
        this.filteredHotels = this.hotels.filter(hotel => !!~hotel.tags.indexOf(tag.value));
        this.listItemClicks.emit(this.filteredHotels[0]);
    }

    getFilteredHotels():Array<IHotel> {
        var currentTag = this.getCurrentTag();
        return !!currentTag ? this.hotels.filter(hotel => !!~hotel.tags.indexOf(currentTag.value)) : this.hotels;
    }


}
