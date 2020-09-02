import { Observable } from 'rxjs';

export interface IProductGrpcService {
  createProduct(input: INameString): Observable<any>
}

interface INameString {
  name: string
}
