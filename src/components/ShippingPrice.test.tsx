import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShippingPrice from './ShippingPrice';

describe('<ShippingPrice />', () => {
  test('renders initial price as zero', () => {
    render(<ShippingPrice />);

    expect(screen.getByText(/total price is 0 egp/i)).toBeInTheDocument();
  });

  test('calculates price for small package', async () => {
    render(<ShippingPrice />);

    await userEvent.type(screen.getByLabelText(/package weight/i), '3');

    expect(screen.getByText(/total price is 50 egp/i)).toBeInTheDocument();
  });

  test('calculates price for big package', async () => {
    render(<ShippingPrice />);

    await userEvent.type(screen.getByLabelText(/package weight/i), '8');

    expect(screen.getByText(/total price is 80 egp/i)).toBeInTheDocument();
  });

  test('shows error for invalid weight', async () => {
    render(<ShippingPrice />);

    await userEvent.type(screen.getByLabelText(/package weight/i), '-1');

    expect(screen.getByRole('alert')).toHaveTextContent(
      /weight must be bigger than zero/i,
    );
  });
});
