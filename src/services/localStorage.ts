export default {
  getItem: (name: string): any => {
    const _val = localStorage.getItem(name);
    try {
      if (_val) {
        return JSON.parse(_val);
      }

      console.error(`${name} not found in localStorage`);
    } catch (error) {
      console.error(error);
    }

    return null;
  },
  setItem: ({ value, name }: {value: any; name: string}): void => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      throw new Error(`Couldn\`t  set value ${name} to localStorage`);
    }
  },
};
