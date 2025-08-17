import { Injectable } from '@nestjs/common';
import { CreateUserEmailDto } from './dto/email.dto';

@Injectable()
export class EmailService {
  async sendEmail(data: CreateUserEmailDto) {
    return { to: data.to, subject: data.subject, body: data.body };
  }

  async postPipe(nama: string) {
    return { nama };
  }
}
