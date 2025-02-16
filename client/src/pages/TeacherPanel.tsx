
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { teacherClasses } from "../data/teacherClasses";

function TeacherPanel() {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <h1 className="p-3 font-semibold text-lg bg-gray-200 rounded">My Classes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
          {teacherClasses.map((classItem, index) => (
            <Link
              to={`/class/${classItem.title}`}
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className="mb-3 w-full object-cover rounded"
              />
              <h2 className="text-center text-gray-800 text-xl font-bold">{classItem.title}</h2>
              <p className="text-gray-600 text-center">{classItem.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default TeacherPanel;
