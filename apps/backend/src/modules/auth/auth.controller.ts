import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { email: string }) {
    return { accessToken: 'demo-token', user: { email: body.email, role: 'manager' } };
  }
}
