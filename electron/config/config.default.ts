import { AppInfo, IConfig } from '@electron-boot/framework';
import { screen } from 'electron';
import {DesignUtils} from "../utils/design.utils";

DesignUtils.configure(1080,1920)
export default (appInfo: AppInfo): IConfig => {
  let urlStr: string;
  if (appInfo.env === 'development') {
    urlStr = process.env.VITE_DEV_SERVER_URL as string;
  } else {
    const url = new URL('file://' + __dirname + '/../../html/index.html');
    urlStr = url.href;
  }
  return {
    windowsOptions: {
      default: {
        show: false,
        titleBarStyle: 'default',
        focusable: true,
        center: true,
        webPreferences: {
          contextIsolation: true,
          scrollBounce: process.platform === 'darwin',
        },
      },
      main: {
        show: false,
        url: urlStr,
        width: DesignUtils.getRealityWidth(1000),
        height: DesignUtils.getRealityHeight(800),
        webPreferences: {
          preload: require.resolve('../preload/main.preload'),
          zoomFactor: 1.0/screen.getPrimaryDisplay().scaleFactor,
        },
      },
    },
  } as IConfig;
};
