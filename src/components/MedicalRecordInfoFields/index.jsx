import * as MRIF from "./styles";
import {
  BsFillXSquareFill,
  BsFillCheckSquareFill,
  BsPlusSquareFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useState } from "react";

const MedicalRecordInfoFields = ({
  title,
  reportedProblems,
  situation,
  observation,
}) => {
  const [showDetailSituation, setShowDetailSituation] = useState(false);

  const [problems, setProblems] = useState(reportedProblems);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    let lastId;

    if (problems.length === 0) {
      lastId = 0;
    } else {
      lastId = problems[problems.length - 1].id;
    }

    const newProblem = { id: lastId + 1, ...data };
    setProblems([...problems, newProblem]);
  };

  const handleRemoveProblem = (chosenProblem) => {
    setProblems(problems.filter((problem) => problem !== chosenProblem));
  };

  return (
    <MRIF.Container>
      <h2>{title}</h2>

      <MRIF.Problems>
        <h3>Problemas</h3>
        <ul>
          {problems.map((problem) => (
            <li key={problem.id}>
              {problem.description}{" "}
              <BsFillTrashFill
                className="remove_problem"
                onClick={() => handleRemoveProblem(problem)}
              />
            </li>
          ))}
          <form className="add_problem" onSubmit={handleSubmit}>
            <input name="description" placeholder="Problema..." />
            <button type="submit">
              <BsPlusSquareFill />
            </button>
          </form>
        </ul>
      </MRIF.Problems>

      <MRIF.MoreInfo
        active={situation === 1}
        showDetailSituation={showDetailSituation}
      >
        {situation === 0 ? (
          <>
            {showDetailSituation && (
              <span className="detail_situation">Inativo</span>
            )}
            <BsFillXSquareFill
              className="situation"
              onMouseEnter={() => setShowDetailSituation(true)}
              onMouseLeave={() => setShowDetailSituation(false)}
            />
          </>
        ) : (
          <>
            {showDetailSituation && (
              <span className="detail_situation">Ativo</span>
            )}
            <BsFillCheckSquareFill
              className="situation"
              onMouseEnter={() => setShowDetailSituation(true)}
              onMouseLeave={() => setShowDetailSituation(false)}
            />
          </>
        )}

        <textarea
          maxLength="500"
          className="observation"
          placeholder="Observações..."
          defaultValue={observation}
        ></textarea>
      </MRIF.MoreInfo>
    </MRIF.Container>
  );
};

export default MedicalRecordInfoFields;
