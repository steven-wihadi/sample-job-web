import { createGetRequest } from '../../shared/services/api-adapter/api-adapter';

export const JobListService = {
  useCase: {
    getJoblist
  }
 }
 
 function getJoblist(description, location, isFulltime, page) {
   const apiPath = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
   const pagePath = `?page=${page}`;
   const descriptionPath = (description) ? `&description=${description}` : '';
   const locationPath = (location) ? `&location=${location}` : '';
   const isFulltimePath = (isFulltime) ? `&full_time=${isFulltime}` : '';
   return createGetRequest(apiPath + pagePath + descriptionPath + locationPath + isFulltimePath);
 }