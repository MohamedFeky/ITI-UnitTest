export function reverseString(str: string): string {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

export function getCharactersCount(str: string): Record<string, number> {
  const count: Record<string, number> = {};

  for (const char of str) {
    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  return count;
}

export function validatePassword(password: string): boolean {
  const hasMinimumLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);

  return hasMinimumLength && hasUppercase && hasNumber && hasSpecialCharacter;
}

export function maskCardNumber(cardNumber: string): string {
  const lastFourNumbers = cardNumber.slice(-4);
  const hiddenPart = '*'.repeat(cardNumber.length - 4);

  return hiddenPart + lastFourNumbers;
}
