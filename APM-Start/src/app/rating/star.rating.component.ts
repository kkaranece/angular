import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector:'star-rating',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarRating implements OnChanges{
    @Input() rating : number = 0;
    @Input() productId : number = 0;
    @Output() ratingEmitter : EventEmitter<number> = new EventEmitter<number>();
    cropWidth : number = 75;

    ngOnChanges(changes: SimpleChanges): void {
        
        const ratingChangeEvent = changes['rating'];
        if(ratingChangeEvent != null){
            this.cropWidth = this.rating * 75/5;
        }
    }

    ratingClicked() : void{
        console.log(`Rating clicked for ${this.productId}`);
        this.ratingEmitter.emit(this.productId);
    }

}