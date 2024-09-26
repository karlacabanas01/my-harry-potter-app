import { parse, format } from 'date-fns';

export const formatDateOfBirth = (dateString: string): string => {
  try {
    const parsedDate = parse(dateString, 'dd-MM-yyyy', new Date());

    if (isNaN(parsedDate.getTime())) {
      throw new Error('Invalid date');
    }

    return format(parsedDate, "d 'of' MMM, yyyy", { locale: undefined });
  } catch (error) {
    console.error('Error parsing date:', error);
    return 'Fecha no encontrada';
  }
};

export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
