import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template:`
    <div class="child">
        <h2>Child Component</h2>
        <button (click)="updateCount()">Add To Parent</button>
    </div>
    `,
    styles: [`
        .child{
            border: 5px solid #c4e6ff;
            border-radius: 10px;
            background-color: #c3E480;
            height: 100px;
        }    
    `]
})

export class ChildComponent {
    @Input("parentCount")
    count: number;

    @Output()
    change: EventEmitter<number> = new EventEmitter<number>();

    updateCount() {
        this.count++;
        this.change.emit(this.count);
    }
}