import React from 'react';
import { render } from '@testing-library/react';
import { RateItem } from '@/molecules/RateItem/RateItem';

describe('RateItem', () => {
  it('renders with given label, rate, and totalRate', () => {
    const label = 'Test Label';
    const rate = 500000;
    const totalRate = 1000000;

    const { getByText } = render(<RateItem label={label} rate={rate} totalRate={totalRate} />);

    expect(getByText(label)).toBeInTheDocument();
    expect(getByText('500.0K')).toBeInTheDocument();
  });
});
