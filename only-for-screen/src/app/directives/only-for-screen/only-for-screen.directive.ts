import {
  Directive, ElementRef, HostListener, Input, OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {StoreService} from '../../shared/store.service';

@Directive({
  selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective implements OnInit {
  view: string;

  @Input() set onlyForScreen(view: string) {
    this.view = view;
  };

  constructor(private el: ElementRef,
              public store: StoreService,
              private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>
  ) {
    this.store.windowResize$.subscribe(this.isShowEl.bind(this));
  }

  /*
    mobile: viewportWidth < config.mobile
    tablet: config.mobile <= viewportWidth < config.tablet
    desktop: config.tablet <= viewportWidth
  */

  ngOnInit() {
    this.isShowEl(window.innerWidth);
  }

  isShowEl(width) {
     // console.log(window.innerWidth + ' --- ' + this.size);

    if (this.store.conf[this.view] < width) {
      this.viewContainer.remove();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.remove();
    }
  }

  @HostListener('window:resize')
  onResize() {
  }

}

