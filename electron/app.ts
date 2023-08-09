import { Autowired, IBrowserWindow, Init, Module } from '@electron-boot/framework';
import { SystemController } from './controller/system.controller';
import defaultConfig from './config/config.default';

@Module({
  providers: [SystemController],
  configs: [{ default: defaultConfig }],
})
export class AppModule {
  @Autowired()
  mainWindow: IBrowserWindow;
  @Init()
  async init() {
    this.mainWindow.on('ready-to-show', () => {
      this.mainWindow.show();
    });
  }
}
