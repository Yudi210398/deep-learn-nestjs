import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { notifikasiService } from './notifikasiEmail.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { UppercasePipe } from 'src/manualPipe dan interceptor/pipeTransformUppercase.pipe';
import { EmailService } from './email.service';
import { TransformInterceptor } from 'src/manualPipe dan interceptor/interceptorSederhana.interceptor';
import { LoggingInterceptor } from 'src/manualPipe dan interceptor/interceptorLogging.interceptor';

@Controller('email')
@UseInterceptors(TransformInterceptor)
@UseInterceptors(LoggingInterceptor)
export class EmailController {
  constructor(
    private notifikasi: notifikasiService,
    private emailService: EmailService,
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getNotif() {
    return this.notifikasi.sendEmailNotif('Hana@gmail.com');
  }

  @Post()
  async postpipe(@Body('nama', UppercasePipe) nama: string) {
    return this.emailService.postPipe(nama);
  }
}
