export interface ClientConstructorParams {
  accessToken: string;
}

export interface ClientImagineParams {
  inputs: string;
  width: number;
  height: number;
}

export class Client {
  public BASE_URL: string;
  public accessToken: string;

  imagine(data: ClientImagineParams): Promise<Object>;
}
