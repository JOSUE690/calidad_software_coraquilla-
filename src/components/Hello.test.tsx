import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

describe('Hello Component', () => {
  it('debería renderizar un saludo correctamente', () => {
    // Renderizamos el componente con la prop name="Vitest"
    render(<Hello name="Vitest" />);
    
    // Buscamos el texto en el documento virtual
    const heading = screen.getByText(/Hello, Vitest!/i);
    
    // Verificamos que exista
    expect(heading).toBeDefined();
  });
});