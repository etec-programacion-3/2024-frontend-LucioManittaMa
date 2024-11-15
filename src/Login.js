import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importamos Axios

function Login() {
  const [email, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Envío de las credenciales al backend con Axios
      const response = await axios.post('http://192.168.42.27:5000/api/auth/login', {
        email:email,
        contraseña: contraseña,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Guardamos el token en localStorage
        localStorage.setItem('token', response.data.token);

        // Si el login es exitoso, redirigimos al usuario
        navigate('/'); // Redirige a la página principal o donde sea necesario
      } else {
        setError(response.data.message || 'Email o contraseña incorrectos');
      }
    } catch (error) {
      setError('Error de conexión. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
