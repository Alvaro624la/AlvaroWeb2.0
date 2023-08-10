import { render, screen } from '@testing-library/react';
import Inicio from './Inicio';
import React from 'react';
import '@testing-library/jest-dom';
import { ContextPostsProvider } from './blog_articles/ContextBlog';
// import '@testing-library/jest-dom/extend-expect';

beforeEach(()=>{
    render(
        <ContextPostsProvider />,
        <Inicio/>
    )
});

test('está en el documento?', async () => {
    // screen.debug();
    const elemento = await screen.findByText(/Portfolio/i);
    expect(elemento).toBeInTheDocument();
});