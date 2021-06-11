import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

  afterEach(cleanup);

  describe('Modal component', () => {
      it('renders', () => {
          render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
      })
      it('matches snapshot DOM node structure', () => {
          // Arrange the snapshot - declare variables
            const { asFragment } = render(<Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
                />);
          // Assert the match
            expect(asFragment()).toMatchSnapshot();

      });
  })

  describe('Click Event', () => {
      it('calls onClose handler', () => {
          // Arrange: Render Modal
          const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
           />);

          // Act: Simulate Click event
                fireEvent.click(getByText('Close this modal'));
          // Asset: expected matcher
          expect(mockToggleModal).toHaveBeenCalledTimes(1);
      });
  })