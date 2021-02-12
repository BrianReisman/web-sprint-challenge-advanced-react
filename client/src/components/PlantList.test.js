import React from 'react'; //for JSX
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'; //note names match. Only needed if you are checking behavior vs existance.
import PlantList from './PlantList'; //The component you built and want to test.

const asdf =     {
  name: 'Peperomia Rosso',
  id: 143,
  scientificName: 'Peperomia caperata rosso',
  difficulty: 'easy',
  light: 'direct',
  img: 'https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590',
  sizes: [
    'small'
  ],
  watering: 2,
  description: 'Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.',
  price: 21
};


test('that the mocked in plant title is on the page', async ()=>{
  render(<PlantList addToCart={asdf}/>) //let there be light!
  const title = await screen.findByText(/Peperomia Rosso/i)
  
  expect(title).toBeInTheDocument();
})
