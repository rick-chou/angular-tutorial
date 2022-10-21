import { Injectable, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export enum EMessageCode {
  XXXError = 1024,
  YYYError = 1025,
}

export const MESSAGE = {
  [EMessageCode.XXXError]: 'XXXError...',
  [EMessageCode.YYYError]: 'YYYError...',
};

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private templateMap = new Map<EMessageCode, TemplateRef<any>>();
  constructor(private notificationService: NzNotificationService) {}

  public initTemplate(message: EMessageCode, ref: TemplateRef<any>): void {
    this.templateMap.set(message, ref);
  }

  public showMessage(messageCode: EMessageCode) {
    switch (messageCode) {
      case EMessageCode.XXXError:
        return this.notificationService.template(<TemplateRef<any>>this.templateMap.get(messageCode), {
          nzDuration: 0,
        });
      case EMessageCode.YYYError: {
        return this.notificationService.error('YYYError', MESSAGE[EMessageCode.YYYError]);
      }
    }
  }

  

  public removeMessage(messageId?: string) {
    this.notificationService.remove(messageId);
  }
}
