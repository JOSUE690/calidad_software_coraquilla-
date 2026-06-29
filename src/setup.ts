import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extiende los "matchers" para que puedas usar funciones como toBeInTheDocument
expect.extend(matchers);

// Limpia el DOM después de cada prueba para que no se mezclen
afterEach(() => {
  cleanup();
});