import { MockData, Episode } from '../models/common/types';

export const getEpisodeParams = (arr: Episode[]) => {
  return arr.reduce((acc: number[], ep: Episode) => {
    acc.push(ep.id);
    return acc;
  }, []);
};

export const mockFetchResponse = (data: MockData) => {
  global.fetch = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        data : {
          characters : data
        }
      }),
    })
  );
};
