import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '@/molecules/Table/Table';

describe('Table component', () => {
  const labels = ['Store', 'Model', 'Inventory', 'Status', 'Date']
  const dataset = [
    {store: 'ALDO Centre Eaton', model: 'ADERI', inventory: 10, status: 'low', date: 'May 4th, 2024'}
  ]

  it('renders table correctly with given data and options', () => {
    const { getByText } = render(
      <Table labels={labels} dataset={dataset} />
    );

    labels.forEach((label) => {
      expect(getByText(label)).toBeInTheDocument();
    });

    dataset.forEach((rowData) => {
      Object.values(rowData).forEach((value) => {
        expect(getByText(value)).toBeInTheDocument();
      });
    });
  });
});
