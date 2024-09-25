import { parse, format } from 'date-fns';

export const formatDateOfBirth = (dateString: string): string => {
  const parsedDate = parse(dateString, 'dd-MM-yyyy', new Date());
  return format(parsedDate, "d 'of' MMM, yyyy", { locale: undefined });
};

export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
