import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
    selector: 'app-tp2',
    templateUrl: './tp2.component.html',
    styleUrls: ['./tp2.component.css']
})
export class Tp2Component implements AfterViewInit {
    @ViewChild('triple')
    private triple: ElementRef;

    constructor(public dataService: DataService) {
    }

    ngAfterViewInit(): void {
    }
}
