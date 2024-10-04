export interface BaseResponse2<T> {
    Result: T;
    ErrorMessage: string;
    ErrorCode: string;
  }