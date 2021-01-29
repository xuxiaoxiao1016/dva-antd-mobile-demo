import request from '../utils/request';

export function getAllUser() {
  return request('/api/Userinfotab/selectAll');
}