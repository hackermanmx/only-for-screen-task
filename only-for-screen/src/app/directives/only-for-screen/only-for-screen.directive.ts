import {
  AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges, Renderer, TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { IConfig } from '../../interfaces/iconfig';

@Directive({
  selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective implements OnChanges {
  config: IConfig = {
    mobile: 460,
    tablet: 768,
    desktop: 1100
  };

  @Input() set onlyForScreen(view: string) {
    this.setVisibility(view, document.querySelector('body').clientWidth);
  };

  constructor(private eleRef: ElementRef,
              private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>
  ) { }

  /*
    mobile: viewportWidth < config.mobile
    tablet: config.mobile <= viewportWidth < config.tablet
    desktop: config.tablet <= viewportWidth
  */

  ngOnChanges() {

  }

  setVisibility(view: string, width: number) {
    if (view === 'mobile' && width < this.config.mobile) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (view === 'tablet' && width <= this.config.tablet) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (view === 'desktop' && this.config.tablet <= width) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  @HostListener('window:resize')
  onResize() {
  }

}

