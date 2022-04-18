import { Controller, Post, Headers, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { EnumProvider } from './entities/enums/provider';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('/github')
  async createWebhooksMessage(
    @Headers() headers: Headers,
    @Body() payload: string,
  ) {
    //log start
    await this.appService.createMessage(
      headers['x-github-delivery'],
      headers['x-github-event'],
      payload,
      headers['x-hub-signature-256'],
      EnumProvider.Github,
    );
    //log end
  }
}
