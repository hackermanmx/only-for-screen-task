import {InjectionToken} from '@angular/core';
import {IConfig} from "./interfaces/iconfig";

export const WIDTH_CONFIG: IConfig = {
  mobile: 460,
  tablet: 768,
  desktop: 1100
};

export const APP_CONFIG = new InjectionToken<IConfig>('app.config');
