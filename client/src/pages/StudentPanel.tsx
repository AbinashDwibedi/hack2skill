import React, { useState } from 'react';
import { Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const StudentPanel = () => {
  const student = {
    name: 'John Doe',
    rollNo: '12345',
    semester: '6th',
    branch: 'Computer Science'
  };

  const initialAssignments = [
    { id: 1, title: 'Math Assignment', description: 'Solve the problems in chapter 5', teacher: 'Mr. Smith', details: 'Solve the problems in chapter 5', completed: false },
    { id: 2, title: 'Science Assignment', description: 'Write a report on the water cycle', teacher: 'Ms. Johnson', details: 'Write a report on the water cycle', completed: false },
    { id: 3, title: 'History Assignment', description: 'Read chapter 3 and answer the questions', teacher: 'Mrs. Brown', details: 'Read chapter 3 and answer the questions', completed: false },
    { id: 4, title: 'Geography Assignment', description: 'Create a map of the local area', teacher: 'Mr. Smith', details: 'Create a map of the local area', completed: false },
    { id: 5, title: 'English Assignment', description: 'Write an essay on your favorite book', teacher: 'Ms. Johnson', details: 'Write an essay on your favorite book', completed: false },
    { id: 6, title: 'Physics Assignment', description: 'Complete the lab experiment on page 45', teacher: 'Mrs. Brown', details: 'Complete the lab experiment on page 45', completed: false },
    { id: 7, title: 'Chemistry Assignment', description: 'Prepare a presentation on chemical reactions', teacher: 'Mr. Smith', details: 'Prepare a presentation on chemical reactions', completed: false }
  ];

  const tests = [
    { id: 1, title: 'Test 1', result: '85%' },
    { id: 2, title: 'Test 2', result: '90%' },
    { id: 3, title: 'Test 3', result: '78%' },
    { id: 4, title: 'Test 4', result: '88%' },
    { id: 5, title: 'Test 5', result: '92%' }
  ];

  const teachers = ['Mr. Smith', 'Ms. Johnson', 'Mrs. Brown'];

  const [assignments, setAssignments] = useState(initialAssignments);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState('');

  const handleTeacherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeacher(e.target.value);
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = () => {
    setSubmittedFeedback(`Feedback for ${selectedTeacher}: ${feedback}`);
    setFeedback('');
  };

  const handleAssignmentToggle = (id: number) => {
    setAssignments(assignments.map(assignment =>
      assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
    ));
  };

  const completedAssignments = assignments.filter(assignment => assignment.completed).length;
  const totalAssignments = assignments.length;

  const pieData = {
    labels: ['Completed', 'Incomplete'],
    datasets: [
      {
        data: [completedAssignments, totalAssignments - completedAssignments],
        backgroundColor: ['#4CAF50', '#FF6384']
      }
    ]
  };

  const lineData = {
    labels: tests.map(test => test.title),
    datasets: [
      {
        label: 'Test Performance',
        data: tests.map(test => parseFloat(test.result)),
        fill: false,
        borderColor: '#4CAF50'
      }
    ]
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Student Information</h2>
        <p><span className="font-bold">Name:</span> {student.name}</p>
        <p><span className="font-bold">Roll No:</span> {student.rollNo}</p>
        <p><span className="font-bold">Semester:</span> {student.semester}</p>
        <p><span className="font-bold">Branch:</span> {student.branch}</p>
      </div>
      <div className="flex space-x-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Assignments</h2>
          <div className="grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
            {assignments.map(assignment => (
              <div
                key={assignment.id}
                className="p-4 border rounded-lg hover:bg-gray-100"
              >
                <h3 className="text-xl font-semibold">{assignment.title}</h3>
                <p><span className="font-bold">Description:</span> {assignment.description}</p>
                <p><span className="font-bold">Teacher:</span> {assignment.teacher}</p>
                <p><span className="font-bold">Details:</span> {assignment.details}</p>
                <input
                  type="checkbox"
                  checked={assignment.completed}
                  onChange={() => handleAssignmentToggle(assignment.id)}
                  className="mt-2"
                />
              </div>
            ))}
          </div>
          <div className="mt-4 w-1/2 mx-auto">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Tests</h2>
          <div className="grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
            {tests.map(test => (
              <div
                key={test.id}
                className="p-4 border rounded-lg hover:bg-gray-100"
              >
                <h3 className="text-xl font-semibold">{test.title}</h3>
                <p>Result: {test.result}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Line data={lineData} />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedTeacher}
          onChange={handleTeacherChange}
        >
          <option value="" disabled>Select a teacher</option>
          {teachers.map(teacher => (
            <option key={teacher} value={teacher}>{teacher}</option>
          ))}
        </select>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows={4}
          placeholder="Write your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
          disabled={!selectedTeacher}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleFeedbackSubmit}
          disabled={!selectedTeacher || !feedback}
        >
          Submit Feedback
        </button>
        {submittedFeedback && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <h3 className="text-xl font-semibold">Submitted Feedback</h3>
            <p>{submittedFeedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPanel;