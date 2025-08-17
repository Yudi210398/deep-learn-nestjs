import { ForbiddenException, Injectable } from '@nestjs/common';
import { EmailService } from './email.service';

@Injectable()
export class notifikasiService {
  constructor(private serviceEmail: EmailService) {}

  async sendEmailNotif(to: string) {
    if (to) throw new ForbiddenException('Lu login, tapi ga punya akses!');
    return this.serviceEmail.sendEmail({
      to,
      subject: 'hai han',
      body: 'Main yuk',
    });
  }
}
