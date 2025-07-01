import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes/${id}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error("No se pudieron obtener los datos.");
        }
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
        setIsLoading(false);
      } catch (error) {
        setError("Error al obtener los datos. Intentalo de nuevo más tarde.");
        isLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log("Falla al enviar los datos.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeNote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseUrl, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-6">
      <form
        onSubmit={updateNote}
        className="px-4 sm:px-6 lg:px-8 w-full mb-6 bg-yellow-400 dark:bg-blue-600 rounded-xl shadow-md p-6 space-y-5"
      >
        {/* Campo Título */}
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-6 py-4 text-3xl/tight font-extrabold rounded-lg border-transparent bg-yellow-400 dark:bg-blue-600 text-inherit dark:text-inherit placeholder:text-inherit dark:placeholder:text-inherit focus:outline-none focus:ring-transparent"
        />

        {/* Campo Descripción */}
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="6"
          required
          className="w-full px-6 py-4 text-2xl/tight rounded-lg border-transparent bg-yellow-400 dark:bg-blue-600 text-inherit dark:text-inherit placeholder:text-inherit dark:placeholder:text-inherit focus:outline-none focus:ring-transparent"
        ></textarea>

        {/* Botón */}
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={submitted}
            className={`w-full sm:w-auto px-6 py-3 text-lg text-gray-200 dark:text-gray-800 font-semibold rounded-lg transition
            ${
              submitted
                ? "bg-gray-200 dark:bg-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-gray-300"
            }
          `}
          >
            {submitted ? "Actualizando nota..." : "Actualizar nota"}
          </button>

          <div>
            <Link to="/"></Link>

            <button
              onClick={removeNote}
              className="w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-lg border-2 border-gray-800 text-gray-800 hover:bg-gray-200 dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              Eliminar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateNote;
