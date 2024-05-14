import React from 'react';
import { render } from '@testing-library/react';

import { StatCard } from "@/molecules/StatCard/StatCard";

describe('StatCard Component', () => {

  it('renders stat card correctly when is a store instance', () => {
    const data = {total: 10, growth: {changeInCount: -1, percentageChange: 0.3} }
    const { container, getByText } = render(<StatCard instance='store' data={ data } />);
    const cardLabelElement = getByText('Total of stores')
    const iconElement = container.querySelector('.icon-store')
    const totalFormattedElement = getByText('10')
    
    expect(cardLabelElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(totalFormattedElement).toBeInTheDocument();
  })

  it('renders stat card correctly when is a model instance', () => {
    const data = {total: 20, growth: {changeInCount: 0, percentageChange: 0} }
    const { container, getByText } = render(<StatCard instance='model' data={ data } />);
    const cardLabelElement = getByText('Total of models')
    const iconElement = container.querySelector('.icon-box-open')
    const totalFormattedElement = getByText('20')
    
    expect(cardLabelElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(totalFormattedElement).toBeInTheDocument();
  })

  it('renders stat card correctly when is a inventory instance', () => {
    const data = {total: 9200, growth: {changeInCount: 1, percentageChange: 12} }
    const { container, getByText } = render(<StatCard instance='inventory' data={ data } />);
    const cardLabelElement = getByText('Total of inventory')
    const iconElement = container.querySelector('.icon-shelves')
    const totalFormattedElement = getByText('9.2K')
    
    expect(cardLabelElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(totalFormattedElement).toBeInTheDocument();
  })

})