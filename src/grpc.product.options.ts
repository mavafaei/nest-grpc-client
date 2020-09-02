import { Transport, ClientOptions } from '@nestjs/microservices'
import { join } from 'path'

export const prodcutMicroserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    // host: '127.0.0.1',
    // port: 8877,
    package: 'product',
    protoPath: join(__dirname, '../src/product.proto')
  }
}
