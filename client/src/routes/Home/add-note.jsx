import React, { useState } from "react";

const AddNote = () => {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const addNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response) {
        setTitle("");
        setDescription("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log("Falla al enviar los datos.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-6">
      <form
        onSubmit={addNote}
        className="px-4 sm:px-6 lg:px-8 w-full mb-6 bg-yellow-400 dark:bg-blue-600 rounded-xl shadow-md p-6 space-y-5"
      >
        {/* Campo Título */}
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
          required
          className="w-full px-6 py-4 text-3xl/tight font-extrabold rounded-lg border-transparent bg-yellow-400 dark:bg-blue-600 text-inherit dark:text-inherit placeholder:text-inherit dark:placeholder:text-inherit focus:outline-none focus:ring-transparent"
        />

        {/* Campo Descripción */}
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción"
          rows="6"
          required
          className="w-full px-6 py-4 text-2xl/tight rounded-lg border-transparent bg-yellow-400 dark:bg-blue-600 text-inherit dark:text-inherit placeholder:text-inherit dark:placeholder:text-inherit focus:outline-none focus:ring-transparent"
        ></textarea>

        {/* Botón */}
        <div>
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
            {submitted ? "Guardando nota..." : "Guardar nota"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
