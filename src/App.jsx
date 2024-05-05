import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://softwium.com/api/books");
    const jsonData = await response.json();
    setAuthors(jsonData);
  };

  return (
    <div>
      <h1 className="text-3xl flex justify-center items-center">
        Books and Its Author
      </h1>

      <div className="flex flex-wrap justify-center my-8 ">
        <div className="justify-around text-center grid grid-cols-3">
          {authors.map((author) => (
            <div
              className="max-w-xs rounded overflow-hidden shadow-lg m-4"
              key={author.id}
            >
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{author.title}</h2>
                <p className="text-gray-700 text-base">
                  Page: {author.pageCount}
                </p>
                <p className="text-gray-700 text-base">
                  Written by {author.authors}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
