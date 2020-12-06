import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from '../../service/data.service';
import {AnonCmd, clicksBinder, LogLevel} from 'interacto';

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
        clicksBinder(3)
            .on(this.triple.nativeElement)
            .toProduce(i => new AnonCmd(() => this.dataService.setNewRandomColor()))
            .log(LogLevel.binding)
            .preventDefault()
            .bind();
    }
}
