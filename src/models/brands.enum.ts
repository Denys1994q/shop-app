import {capitalizeFirstLetter} from '@/services/capitalizeFirstLetter';

export enum Brands {
  SONY = 1,
  PHILIPS = 2,
  TOSHIBA = 3,
  LG = 4,
  APPLE = 5,
  SAMSUNG = 6,
  ZTE = 7,
  MOTOROLA = 8,
  TECHNO = 9,
  NOKIA = 10,
  XIAOMI = 11,
  POCO = 12,
  BEKO = 13,
  GORENJE = 14,
  INDESIT = 15,
  CORRADO = 16,
  BRAIN = 17,
  FORMULA = 18
}

export const brandItems = Object.keys(Brands)
  .filter((key) => typeof Brands[key as keyof typeof Brands] === 'number')
  .map((key) => ({
    label: capitalizeFirstLetter(key),
    value: Brands[key as keyof typeof Brands]
  }));