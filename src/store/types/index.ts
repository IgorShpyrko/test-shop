import * as goods from './goods';

export type Product = {
  id: string;
  name: string;
  category: string;
};

export default {
  ...goods,
};
