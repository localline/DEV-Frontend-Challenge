import userEvent from '@testing-library/user-event'
import {expect, it} from 'vitest'
import {render, screen} from '@testing-library/react'
import NoteForm from '../src/app/components/NoteForm';

it('Displays error appropriately', async () => {
  const user = userEvent.setup()

  render(<NoteForm orderId={123}/>);

  const buttonComponent = screen.getByRole('button', {});

  expect(buttonComponent).toBeDefined();

  await user.click(buttonComponent);

  const textComponent = await screen.findByRole('textbox', {});

  expect(textComponent).toHaveClass('border-Red600');

  await user.type(textComponent, 'np hahaha 🫵😻');

  expect(textComponent).not.toHaveClass('border-Red600');
});
