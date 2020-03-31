import { Inject, Injectable } from '@angular/core';
import { IConfig } from '../interfaces/iconfig';
import { APP_CONFIG } from '../app.conf';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public conf: IConfig;

  public windowResize$ = new BehaviorSubject<number>(window.innerWidth);

  constructor(@Inject(APP_CONFIG) config: IConfig) {
    this.conf = config;

    window.onresize = () => {
      this.windowResize$.next(window.innerWidth);
    };
  }
}
