import * as MRIF from "./styles";

const MedicalRecordInfoFields = ({
  title,
  problems,
  situation,
  observation,
}) => {
  // const [situation, setSituation] = useState(0);

  return (
    <MRIF.Container>
      <h2>{title}</h2>

      <h3>Problemas</h3>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>{problem.description}</li>
        ))}
      </ul>

      <p>
        Situação: <span>{situation === 0 ? "Inativo" : "Ativo"}</span>{" "}
      </p>

      <textarea
        placeholder="Observações..."
        defaultValue={observation}
      ></textarea>
    </MRIF.Container>
  );
};

export default MedicalRecordInfoFields;
