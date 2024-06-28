
import React, { useState } from 'react';
import StudentRegister from './StudentRegister';
import TutorRegister from './TutorRegister';
import Img from '../assets/images/pic1.jpg';

const Register = () => {
  const [role, setRole] = useState(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-5 bg-cover bg-center" style={{ backgroundImage: `url(${Img})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white bg-opacity-75 p-10 rounded-lg shadow-lg w-full max-w-lg">
        {!role && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setRole('student')}
                className="py-3 px-6 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Register as Student
              </button>
              <button
                onClick={() => setRole('tutor')}
                className="py-3 px-6 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Register as Tutor
              </button>
            </div>
          </div>
        )}
        {role === 'student' && <StudentRegister />}
        {role === 'tutor' && <TutorRegister />}
      </div>
    </div>
  );
};

export default Register;
