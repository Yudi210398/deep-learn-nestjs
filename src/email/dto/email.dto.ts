import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserEmailDto {
  @IsEmail()
  to: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  body: string;
}
