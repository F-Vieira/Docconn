import * as MRIF from "./styles";
import { BsPersonCheckFill, BsFillPersonXFill } from "react-icons/bs";
import { useState } from "react";

const MedicalRecordInfoFields = ({
  title,
  problems,
  situation,
  observation,
}) => {
  const [showDetailSituation, setShowDetailSituation] = useState(false);

  return (
    <MRIF.Container>
      <h2>{title}</h2>

      <MRIF.Problems>
        <h3>Problemas</h3>
        <ul>
          {problems.map((problem) => (
            <li key={problem.id}>{problem.description}</li>
          ))}
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
            <BsFillPersonXFill
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
            <BsPersonCheckFill
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
