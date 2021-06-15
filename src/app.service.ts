import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private client:ClientProxy
  constructor(){
    this.client=ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    })
  }
  sendEmail(){
    return this.client.emit('sendEmail',"zohaib.javed@phaedrasolutions.com");
  }
}
