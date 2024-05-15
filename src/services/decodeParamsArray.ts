export const decodeParamsArray = (value: string): number[] => {
  return value.split(',').map((value) => +value);
};
