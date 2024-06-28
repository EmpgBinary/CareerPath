import React from 'react';

const TutorRegister = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Register as a Tutor</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="tutorName">Name</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            type="text"
            id="tutorName"
            name="tutorName"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="tutorEmail">Email</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            type="email"
            id="tutorEmail"
            name="tutorEmail"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="subjects">Subjects</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            type="text"
            id="subjects"
            name="subjects"
            placeholder="Subjects you teach"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="tutorPassword">Password</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            type="password"
            id="tutorPassword"
            name="tutorPassword"
            placeholder="Your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Register as Tutor
        </button>
      </form>
    </div>
  );
};

export default TutorRegister;
