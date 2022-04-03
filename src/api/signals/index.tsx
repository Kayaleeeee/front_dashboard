import { requestToServer } from '../request';

export const getSignals = () => {
  return requestToServer({
    url: `/signal`,
    method: 'GET',
  });
};
