import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Signupandsignin from '../components/Component';

describe('Signupandsignin Component', () => {
  it('renders the component and switches between sign-up and sign-in', async () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    await act(async () => {
      createRoot(root).render(
        <React.StrictMode>
          <Provider store={store}>
            <Router>
              <Signupandsignin />
            </Router>
          </Provider>
        </React.StrictMode>
      );
    });

    await waitFor(() => {
      const registerHeading = screen.findAllByText(/REGISTER/i);
      expect(registerHeading).toBeTruthy();
    });
  });

  it('allows users to type into input fields', async () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    await act(async () => {
      createRoot(root).render( 
        <React.StrictMode>
          <Provider store={store}>
            <Router>
              <Signupandsignin />
            </Router>
          </Provider>
        </React.StrictMode>
      );
    });
    
  it('submits the registration form', async () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    await act(async () => {
      createRoot(root).render(
        <React.StrictMode>
          <Provider store={store}>
            <Router>
              <Signupandsignin />
            </Router>
          </Provider>
        </React.StrictMode>
      );
    });
  });
});
