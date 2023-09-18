import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Inicio from './Inicio';
// import '@testing-library/jest-dom/extend-expect';
import { ContextPostsProvider } from './blog_articles/ContextBlog';

jest.mock('./blog_articles/ContextBlog')

beforeEach(()=>{
    render(
        <ContextPostsProvider>
            <Inicio />
        </ContextPostsProvider>
    )
});

test('Los parrafos estan en el documento?', async () => {
    // screen.debug();
    const texto = screen.getByText(/Portfolio/i);
    expect(texto).toBeInTheDocument();
});