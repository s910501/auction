import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    //this.stars = [ true, false, true, true, true];
  }
  @Input()
  private rating: number = 0;

  // 名字一定是输入属性+ Change才可以用[(rating)]
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private stars: boolean[];
  @Input()
  private readonly: boolean = true;
  constructor() { }

  ngOnInit() {

  }
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }

  }

}
