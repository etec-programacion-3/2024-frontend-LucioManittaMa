import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importamos Axios

function SignUp() {
  const [nombre, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dirección, setAddress] = useState('');
  const [teléfono, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validación de contraseñas
    if (contraseña !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Envío al backend con Axios
      const response = await axios.post('http://192.168.42.27:5000/api/auth/register', {
        nombre,
        email,
        contraseña,
        dirección,
        teléfono
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        navigate('/'); // Redirige a login
      } else {
        setError(response.data.message || 'Error al registrar el usuario');
      }
    } catch (error) {
      setError('Error de conexión. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Nombre*:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email*:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña*:</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmar Contraseña*:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            value={dirección}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Teléfono :</label>
          <input
            type="tel"
            value={teléfono}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default SignUp;
