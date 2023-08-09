import { Action, Controller } from '@electron-boot/framework';
import { LoggerFactory } from '@electron-boot/logger';

@Controller('/system')
export class SystemController {
  private logger = LoggerFactory.getLogger(SystemController);
  @Action('/show-message')
  showMessage({ data }: any) {
    this.logger.info('这是当前的输出asd', data.a);
  }
}
