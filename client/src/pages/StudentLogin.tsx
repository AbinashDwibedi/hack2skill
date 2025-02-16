import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required');
    } else {
      setError('');
      console.log('Student Logged In:', { email, password });
      navigate('/student-panel')
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-black w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-700 transition">Login</button>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;