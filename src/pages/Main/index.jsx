import { useEffect, useState } from "react";
import DashBoardLayout from "../../Template";
import { courses as allCourses } from "../../fileStorage/data";
import Checker from "../Checker";
import { Outlet } from "react-router-dom";

function getAllCourses() {
  let all = allCourses.map((c) => {
    for (const category in c) {
      const courses = [];
      for (const course in c[category]) {
        courses.push(course);
      }
      return { category: category, courses: courses };
    }
  });
  return all;
}

export default function Main({ children }) {
  const allCourses = getAllCourses();
  const [openCheckerModal, setOpenCheckerModal] = useState(false);
  const [course, setCourse] = useState(null);
  const [category, setCategory] = useState(null);

  function handleSelected(pick, from) {
    console.log(`pick ${pick} from ${from}`);
    setCourse(pick);
    setCategory(from);
    setOpenCheckerModal(true);
    console.log(openCheckerModal);
  }

  return (
    <>
      <DashBoardLayout>
        <article>
          <p className="p-2">
            Courses are categorized in relations, select the course you want or
            clcik on check best for us to choose from the category
          </p>
          <section className="">
            {allCourses.map((c) => (
              <div className="my-7">
                <header className="my-3 font-bold text-lg md:text-xl p-3 bg-gray-100">
                  {c.category.replaceAll("_", " ")}
                </header>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-sm md:text-base">
                  {c.courses.map((course) => (
                    <p
                      className="p-2 rounded cursor-pointer hover:bg-green-100"
                      onClick={() => handleSelected(course, c.category)}
                    >
                      {course.replaceAll("_", " ")}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center sm:justify-end">
                  <button
                    className="block l mt-5 mr-7 p-2 bg-green-500 rounded text-white"
                    onClick={() => handleSelected(c.category)}
                  >
                    Check best
                  </button>
                </div>
              </div>
            ))}
          </section>
        </article>
      </DashBoardLayout>
      <Checker
        modal={openCheckerModal}
        setModal={() => setOpenCheckerModal(!openCheckerModal)}
        course={course}
        category={category}
      />
    </>
  );
}
