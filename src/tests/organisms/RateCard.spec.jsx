import React from 'react';
import { render } from '@testing-library/react';
import { RateCard } from '@/organisms/RateCard/RateCard';

describe('RateCard', () => {
  it('renders with given label and dataset', () => {
    const label = 'Test Label';
    const dataset = [
      { label: 'Item 1', rate: 50000, rateFormatted: '50.0K' },
      { label: 'Item 2', rate: 75000, rateFormatted: '75.0K' },
      { label: 'Item 3', rate: 100000, rateFormatted: '100.0K' }
    ];

    const { getByText } = render(<RateCard label={label} dataset={dataset} />);

    expect(getByText(label)).toBeInTheDocument();

    dataset.forEach(item => {
      expect(getByText(item.label)).toBeInTheDocument();
      expect(getByText(item.rateFormatted.toString())).toBeInTheDocument();
    });
  });
});
