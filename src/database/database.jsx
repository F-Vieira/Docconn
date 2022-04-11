export const PATIENTS = [
  {
    id: 1,
    name: "Artorias",
    age: 32,
    sex: "Masculino",
    medicalRecords: [
      {
        title: "Subjetiva",
        problems: [
          { id: 1, description: "Dor no corazon" },
          { id: 2, description: "Dor na mente" },
          { id: 3, description: "Dor na alma" },
        ],
        situation: 1, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Objetiva",
        problems: [{ id: 1, description: "Dor no braço" }],
        situation: 0, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Avaliação",
        problems: [{ id: 1, description: "super descrição" }],
        situation: 1, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Plano",
        problems: [],
        situation: 0, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    id: 2,
    name: "Maria",
    age: 27,
    sex: "Feminino",
    medicalRecords: [
      {
        title: "Subjetiva",
        problems: [
          { id: 1, description: "Dor no corazon" },
          { id: 2, description: "Perdir um amigasso" },
        ],
        situation: 1, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Objetiva",
        problems: [{ id: 1, description: "Dor no braço" }],
        situation: 0, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Avaliação",
        problems: [{ id: 1, description: "super descrição" }],
        situation: 1, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Plano",
        problems: [],
        situation: 0, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    id: 3,
    name: "Ludwing",
    age: 28,
    sex: "Masculino",
    medicalRecords: [
      {
        title: "Subjetiva",
        problems: [
          { id: 1, description: "Dor no corazon" },
          { id: 2, description: "Perdir um amigasso" },
        ],
        situation: 1, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Objetiva",
        problems: [{ id: 1, description: "Dor no braço" }],
        situation: 0, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Avaliação",
        problems: [{ id: 1, description: "super descrição" }],
        situation: 1, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        title: "Plano",
        problems: [],
        situation: 0, //só pode ser 0 ou 1
        observation:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: "Chopper",
    email: "drum@mail.com",
    password: "1234",
  },
  {
    id: 2,
    name: "Tsunade",
    email: "tsu@mail.com",
    password: "1234",
  },
];
