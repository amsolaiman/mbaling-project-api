// ----------------------------------------------------------------------

export interface IResponse {
  meta: {
    totalFetched: number;
    totalOverall: number;
  };
  params: {
    page?: number;
    limit?: number;
  };
}
