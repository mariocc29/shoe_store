import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button } from "@/atoms/Button/Button";

describe('Button Component', () => {
  
  const onClickMock = jest.fn();
  const buttonContent = 'Click me';

  it('renders button with correct content', () => {
    const { getByText } = render(<Button onClick={onClickMock}>{buttonContent}</Button>);
    const buttonElement = getByText(buttonContent);
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls onClick function when button is clicked', () => {
    const { getByText } = render(<Button onClick={onClickMock}>{buttonContent}</Button>);
    const buttonElement = getByText(buttonContent);

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies btn-alert to the button when hasAlert is true', () => {
    const customClass = 'btn-alert';
    const { container } = render(<Button onClick={onClickMock} hasAlert={true}>{buttonContent}</Button>);
    const buttonElement = container.querySelector('button');
    
    expect(buttonElement).toHaveClass('btn');
    expect(buttonElement).toHaveClass(customClass);
  });
});
