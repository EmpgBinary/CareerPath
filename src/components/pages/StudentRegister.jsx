import React from 'react';

const StudentRegister = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Register as a Student</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="studentName">Name</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            type="text"
            id="studentName"
            name="studentName"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="studentEmail">Email</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            type="email"
            id="studentEmail"
            name="studentEmail"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="studentPassword">Password</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
            type="password"
            id="studentPassword"
            name="studentPassword"
            placeholder="Your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Register as Student
        </button>
      </form>
    </div>
  );
};

export default StudentRegister;
