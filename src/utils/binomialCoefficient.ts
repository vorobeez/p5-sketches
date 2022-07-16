interface BinomialCoefficientGetter {
  (n: number, k: number): number;
  cache: Map<string, number>;
}

export function binomialCoefficientFactory(): BinomialCoefficientGetter {
  const cache = new Map<string, number>();
  const getKey = (n: number, k: number): string => `${n}_${k}`;
  const getter = (n: number, k: number): number => {
    if (k > n) {
      throw new Error('k is greater than n');
    }

    if (k === 0) {
      return 1;
    }

    if (k === 1) {
      return n;
    }

    if (k > n / 2) {
      return getter(n, n - k);
    }

    const key = getKey(n, k);
    const cachedResult = cache.get(key);

    if (typeof cachedResult === 'number') {
      return cachedResult;
    }

    const result = getter(n - 1, k - 1) + getter(n - 1, k);

    cache.set(key, result);

    return result;
  };

  getter.cache = cache;

  return getter;
}
