const addUniqueObjToArray = (array: any, newVal: any) => {
  const map = new Map();

  array.map((item: any) => map.set(item.id, true));

  return map.has(newVal.id) ? array : [...array, newVal];
};

export default addUniqueObjToArray;
