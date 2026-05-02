export function add(a: number, b: number): number {
  return a + b;
}

export function isPrime(n: number): boolean {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export function range(start: number, end: number, step = 1): number[] {
  if (step === 0) {
    throw new Error('step cannot be 0');
  }

  const numbers: number[] = [];

  if (start < end) {
    for (let i = start; i <= end; i = i + Math.abs(step)) {
      numbers.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i - Math.abs(step)) {
      numbers.push(i);
    }
  }

  return numbers;
}
