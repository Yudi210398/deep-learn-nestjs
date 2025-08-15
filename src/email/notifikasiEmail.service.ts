import { Injectable } from '@nestjs/common';
import { EmailService } from './email.service';

@Injectable()
export class notifikasiService {
  constructor(private serviceEmail: EmailService) {}

  async sendEmailNotif(to: string) {
    return this.serviceEmail.sendEmail({
      to,
      subject: 'hai han',
      body: 'Main yuk',
    });
  }
}
