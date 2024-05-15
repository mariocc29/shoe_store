import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Frame } from "@/molecules/Frame/Frame";

describe('Frame Component', () => {

  const onClickMock = jest.fn();
  const frameLabel = 'Custom Label';
  const frameContent = 'It is the content';

  it('renders frame component with correct content and label', () => {
    const { getByText, container } = render(<Frame label={frameLabel}>{frameContent}</Frame>);
    const labelElement = getByText(frameLabel);
    const contentElement = getByText(frameContent);
    
    expect(labelElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(container.querySelector('.footer')).toBeNull();
  });

  it('renders button when showFooter is true', () => {
    const { container } = render(<Frame label={frameLabel} showFooter={ true }>{frameContent}</Frame>);
    const footerElement = container.querySelector('.footer');

    expect(footerElement).toBeInTheDocument();
  })

  it('calls onClick function when button is clicked', () => {
    const { getByRole } = render(<Frame label={frameLabel} showFooter={ true } onClick={onClickMock}>{frameContent}</Frame>);
    const buttonElement = getByRole('button');
    
    fireEvent.click(buttonElement);
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

})