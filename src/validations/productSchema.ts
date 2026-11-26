import * as Yup from 'yup';
import type { Dictionary } from '../dictionary';
import { interpolate } from '../utils/services/translate';

export const createProductSchema = (t: Dictionary) =>
  Yup.object({
    title: Yup.string()
      .trim()
      .min(3, interpolate(t.validation.minLength, { min: 3 }))
      .required(t.validation.required),

    description: Yup.string()
      .trim()
      .min(10, interpolate(t.validation.minLength, { min: 10 }))
      .required(t.validation.required),

    price: Yup.number()
      .typeError(t.validation.invalidNumber)
      .positive(t.validation.positive)
      .required(t.validation.required),
    category: Yup.string().required(t.validation.required),
    
    image: Yup.string()
      .trim()
      .url(t.validation.invalidUrl)
      .required(t.validation.required),
  });