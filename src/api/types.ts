export interface ApiError {
  fault: {
    faultstring: string;
    detail: {
      errorcode: string;
    };
  };
}
