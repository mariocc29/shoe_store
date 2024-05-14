import React from 'react';
import { render } from '@testing-library/react';

import { StatIndicator } from "@/atoms/StatIndicator/StatIndicator";

describe('StatIndicator Component', () => {
  
  it('renders stat correctly when changeInCount is positive', () => {
    const { container, getByText } = render(<StatIndicator changeInCount={ 1 } percentageChange={33.33} />);
    const statElement = container.querySelector('.stat-indicator');
    const indicatorElement = container.querySelector('.indicator');
    const iconElement = container.querySelector('i')
    const percentageElement = getByText('33.33')

    expect(statElement).toHaveClass(`stat-indicator-success`);
    expect(indicatorElement).toHaveClass(`indicator-success`);
    expect(iconElement).toHaveClass(`icon-arrow-up`);
    expect(percentageElement).toBeInTheDocument();
  });

  it('renders stat correctly when changeInCount is neutral', () => {
    const { container, getByText } = render(<StatIndicator changeInCount={ 0 } percentageChange={0} />);
    const statElement = container.querySelector('.stat-indicator');
    const indicatorElement = container.querySelector('.indicator');
    const iconElement = container.querySelector('i')
    const percentageElement = getByText('0')

    expect(statElement).toHaveClass(`stat-indicator-warning`);
    expect(indicatorElement).toHaveClass(`indicator-warning`);
    expect(iconElement).toHaveClass(`icon-minus`);
    expect(percentageElement).toBeInTheDocument();
  });

  it('renders stat correctly when changeInCount is negative', () => {
    const { container, getByText } = render(<StatIndicator changeInCount={ -1 } percentageChange={33.33} />);
    const statElement = container.querySelector('.stat-indicator');
    const indicatorElement = container.querySelector('.indicator');
    const iconElement = container.querySelector('i')
    const percentageElement = getByText('33.33')

    expect(statElement).toHaveClass(`stat-indicator-alert`);
    expect(indicatorElement).toHaveClass(`indicator-alert`);
    expect(iconElement).toHaveClass(`icon-arrow-down`);
    expect(percentageElement).toBeInTheDocument();
  });
})