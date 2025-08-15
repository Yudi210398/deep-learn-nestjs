import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { notifikasiService } from './notifikasiEmail.service';

@Module({
  controllers: [EmailController],
  providers: [EmailService, notifikasiService],
})
export class EmailModule {}
