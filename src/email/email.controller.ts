import { Controller, Get, UseGuards } from '@nestjs/common';
import { notifikasiService } from './notifikasiEmail.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('email')
export class EmailController {
  constructor(private notifikasi: notifikasiService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getNotif() {
    return this.notifikasi.sendEmailNotif('Hana@gmail.com');
  }
}
