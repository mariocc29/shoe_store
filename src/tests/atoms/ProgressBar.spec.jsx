import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from '@/atoms/ProgressBar/ProgressBar';

describe('ProgressBar', () => {
  it('renders with given width', () => {
    const { container } = render(<ProgressBar width={50} />);
    const progressBarElement = container.querySelector('.progress-bar');

    expect(progressBarElement).toBeInTheDocument();
    expect(progressBarElement).toHaveStyle('width: 50%');
  });

  it('changes progress-bar-alert class when width is less than 25%', () => {
    const { container } = render(<ProgressBar width={20} />);
    const progressBarElement = container.querySelector('.progress-bar');

    expect(progressBarElement).toHaveClass('progress-bar-alert');
  });

  it('changes progress-bar-warning class when width is between 25% and 75%', () => {
    const { container } = render(<ProgressBar width={50} />);
    const progressBarElement = container.querySelector('.progress-bar');

    expect(progressBarElement).toHaveClass('progress-bar-warning')
  });

  it('changes progress-bar-success class when width is more than 75%', () => {
    const { container } = render(<ProgressBar width={80} />);
    const progressBarElement = container.querySelector('.progress-bar');

    expect(progressBarElement).toHaveClass('progress-bar-success');
  });
});
