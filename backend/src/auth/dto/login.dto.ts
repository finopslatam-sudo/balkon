import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin@balkon.cl' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'MyP@ssw0rd123!' })
  @IsString()
  @MinLength(12)
  password: string;
}
