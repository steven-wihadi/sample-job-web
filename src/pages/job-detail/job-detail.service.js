import { createGetRequest } from '../../shared/services/api-adapter/api-adapter';

export const JobDetailService = {
  usecase: {
    getJobDetail
  }
}

function getJobDetail(id) {
  const apiPath = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;
  return createGetRequest(apiPath);
}
