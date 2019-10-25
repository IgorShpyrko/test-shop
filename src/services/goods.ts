import goods from 'mock/goods';

export default {
  get: (): Promise<any> => new Promise((resolve) => {
    setTimeout(() => {
      resolve(goods);
    }, 0);
  }),
};
