/**
 * Formats a date to return the month name in lowercase
 * @param {Date} date - The date to format
 * @returns {string} The month name in lowercase
 */
export function getMonthName(date: Date | null | undefined): string {
  // Input validation
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return 'january'; // Safe default
  }

  try {
    // Attempt to use locale-specific formatting
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName.toLowerCase();
  } catch (error) {
    // Fallback array in case locale formatting fails
    const months = [
      'january', 'february', 'march', 'april',
      'may', 'june', 'july', 'august',
      'september', 'october', 'november', 'december'
    ];
    
    // Get month index (0-11) and use as array index
    const monthIndex = date.getMonth();
    return months[monthIndex] || 'january';
  }
}

/**
 * Validates if a given month string is valid
 * @param {string} month - The month string to validate
 * @returns {boolean} Whether the month is valid
 */
export function isValidMonth(month: string): boolean {
  const validMonths = new Set([
    'january', 'february', 'march', 'april',
    'may', 'june', 'july', 'august',
    'september', 'october', 'november', 'december'
  ]);
  
  return validMonths.has(month.toLowerCase());
}