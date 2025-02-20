import { z } from 'zod';
import { ERROR_COMMNETS } from '../../constants/errorComments';

const formSchema = z.object({
  personalInfo: z
    .enum(['agree', 'disagree'], { message: ERROR_COMMNETS.NON_CHECK })
    .refine(
      (value) => (value === 'agree' ? true : false),
      ERROR_COMMNETS.SHOULD_AGREE
    ),
  name: z
    .string({ message: ERROR_COMMNETS.EMPTY_STRING })
    // .optional()
    .refine(
      (value) => typeof value === 'string' && value.length > 0,
      ERROR_COMMNETS.EMPTY_STRING
    ),
  email: z
    .string({ message: ERROR_COMMNETS.EMPTY_STRING })
    .nonempty({ message: ERROR_COMMNETS.EMPTY_STRING })
    .email(ERROR_COMMNETS.INVALID_TYPE)
    // .optional()
    .refine((value) => value !== undefined, ERROR_COMMNETS.EMPTY_STRING),
  phoneNumber: z
    .string({ message: ERROR_COMMNETS.EMPTY_STRING })
    .nonempty({ message: ERROR_COMMNETS.EMPTY_STRING })
    .regex(/^\d{3}-\d{4}-\d{4}$/, ERROR_COMMNETS.INVALID_TYPE)
    // .optional()
    .refine((value) => value !== undefined, ERROR_COMMNETS.EMPTY_STRING),
  applyingType: z.enum(
    ['frontend', 'backend', 'design', 'ios', 'android', 'productOwner'],
    { message: ERROR_COMMNETS.NON_CHECK }
  ),
});

export type FormField = Partial<z.infer<typeof formSchema>>;

export default formSchema;
