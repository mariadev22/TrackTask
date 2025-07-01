import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Notes = () => {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("No se pudieron obtener los datos.");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError("Error al obtener los datos. Intentalo de nuevo más tarde.");
        isLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}

      {isLoading ? (
        <p className="text-center py-8 text-gray-700 dark:text-gray-300 text-lg animate-pulse">
          Cargando notas...
        </p>
      ) : error ? (
        <p className="text-center py-8 text-red-500 text-lg">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          <article className="flex justify-center items-center text-8xl bg-orange-400 dark:bg-purple-600 rounded-xl border-2 border-transparent shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-amber-300 dark:hover:border-purple-400 transition-colors duration-300 ease-in-out">
            <Link to={`/add-note`}>+</Link>
          </article>
          {data.map((item) => (
            <article
              key={item._id}
              className="bg-orange-400 dark:bg-purple-600 p-5 rounded-xl border-2 border-transparent shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-amber-300 dark:hover:border-purple-400 transition-colors duration-300 ease-in-out"
            >
              <Link to={`/note/${item._id}`}>
                <h3 className="text-balance text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-snug">
                  {item.description.lenght > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
