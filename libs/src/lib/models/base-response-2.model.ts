export interface BaseResponse2<T> {
    result: T;
    errorMessage: string;
    errorCode: string;
  }