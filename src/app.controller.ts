import { Controller, Body, Post, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices'
import { prodcutMicroserviceOptions } from './grpc.product.options';
import { IProductGrpcService } from './grpc.product.interface';

@Controller()
export class AppController implements OnModuleInit {
  // constructor(private readonly appService: AppService) { }
  @Client(prodcutMicroserviceOptions)
  private client: ClientGrpc

  private grpcService: IProductGrpcService

  onModuleInit() {
    this.grpcService = this.client.getService<IProductGrpcService>('AppController')
  }

  @Post('create/product')
  createProduct(@Body('name') name: string): any {
    // return this.appService.createProduct(name);
    return this.grpcService.createProduct({ name: name })
  }
}
