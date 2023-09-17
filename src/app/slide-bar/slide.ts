import {Component, Input} from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: 'slide.html'
})
export class SlideToggleOverviewExample {

    @Input() sliderToggled = false;

    onSlideChange() {
        this.sliderToggled = !this.sliderToggled;
        console.log(this.sliderToggled)
      }

}
