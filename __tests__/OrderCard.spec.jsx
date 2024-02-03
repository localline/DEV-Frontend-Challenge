import {expect, it} from 'vitest'
import {render, screen} from '@testing-library/react'
import OrderCard from '../src/app/components/OrderCard';
import order from './__stubs__/order.json';

it('Renders the top-level component', () => {
  const {container} = render(<OrderCard order={order}/>)
  const element = container.querySelector('#order-card');
  expect(element).toBeDefined();
});

it('Renders order lines', () => {
  const {container} = render(<OrderCard order={order}/>)
  const elements = container.querySelectorAll('.order-line-wrapper');
  const expectedCount = order.order_entries.length;

  expect(elements).toHaveLength(expectedCount);
})
