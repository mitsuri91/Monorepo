import { useEffect, useState } from "react";
import "./Programs.css";

interface Program {
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  id: number;
}

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Erreur lors du fetch:", error));
  }, []);

  return (
    <div>
      <p>Je suis dans la page program</p>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <p>{program.title}</p>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
