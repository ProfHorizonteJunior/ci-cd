import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza a saudação com o nome correto', () => {
  render(<App nome="Horizonte" />);

  // Verifica se o texto aparece na tela
  const titulo = screen.getByText('Olá, Horizonte!');
  expect(titulo).toBeInTheDocument();
});

test('exibe a mensagem de boas-vindas', () => {
  render(<App nome="Aluno" />);

  const mensagem = screen.getByText(/bem vindo ao ci\/cd/i);
  expect(mensagem).toBeInTheDocument();
});
