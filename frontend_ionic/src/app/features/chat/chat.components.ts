import { Component, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';
@Component({
  selector: 'chat-component',
  templateUrl: 'chat.components.html',
  styleUrls: ['chat.components.scss'],
})
export class ChatComponent implements OnInit{
  private scrolling: boolean = false;
  constructor(private renderer: Renderer2, private el: ElementRef) {
    console.log("called chat compoennt......xxxxxx");
  }

  ngOnInit(): void {
  }


  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    this.scrolling = true;
    this.updateScrollbar();
  }

  @HostListener('scroll', ['$event'])
  onScrollEnd(event: Event) {
    // Add a delay to make sure the user has stopped scrolling
    setTimeout(() => {
      this.scrolling = false;
      this.updateScrollbar();
    }, 500); // Adjust the delay as needed
  }

  private updateScrollbar() {
    if (this.scrolling) {
      this.renderer.addClass(this.el.nativeElement, 'custom-scrolling');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'custom-scrolling');
    }
  }

}
