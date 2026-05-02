import { useMemo, useState } from 'react';

export default function ShippingPrice() {
  const [weight, setWeight] = useState('');

  const price = useMemo(() => {
    const weightAsNumber = Number(weight);

    if (!weight) {
      return 0;
    }

    if (weightAsNumber <= 0) {
      return 0;
    }

    if (weightAsNumber <= 5) {
      return 50;
    }

    return 50 + (weightAsNumber - 5) * 10;
  }, [weight]);

  const hasError = weight !== '' && Number(weight) <= 0;

  return (
    <section>
      <h2>Shipping price</h2>
      <label htmlFor="package-weight">Package weight</label>
      <input
        id="package-weight"
        type="number"
        value={weight}
        onChange={event => setWeight(event.target.value)}
      />
      {hasError && <p role="alert">Weight must be bigger than zero</p>}
      {!hasError && <p>Total price is {price} EGP</p>}
    </section>
  );
}
