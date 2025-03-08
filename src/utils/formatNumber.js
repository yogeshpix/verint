export const formatNumber = (input, isCard = false) => {
  const cleaned = input.replace(/\D/g, '');
  if (isCard) return cleaned;
  if (cleaned.length <= 3) return cleaned;
  if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(
    6,
    10
  )}`;
};
