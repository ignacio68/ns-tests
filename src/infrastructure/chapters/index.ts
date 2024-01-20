export type Chapter = {
  title: string;
  subchapters: Subchapter[];
};

export type Subchapter = {
  title: string;
  src: string;
};

export const chapters: Chapter[] = [
  {
    title: "PRINCIPIOS BÁSICOS",
    subchapters: [
      {
        title: "BASES FÍSICAS DE LA MEDICINA NUCLEAR",
        src: "I_1_.html"
      },
      {
        title: "INSTRUMENTACIÓN GAMMACAMARA Y SPECT",
        src: "I_2_.html"
      },
      {
        title: "INSTRUMENTACIÓN PET-TC",
        src: "I_3_.html"
      },
      {
        title: "ASPECTOS GENERALES DE RADIOFARMACIA",
        src: "I_4_.html"
      },
      {
        title: "RADIOFÁRMACOS",
        src: "I_5_.html"
      },
      {
        title: "RADIOPROTECCIÓN Y DESIMETRÍA",
        src: "I_6_.html"
      },
      {
        title: "INFORME 2023",
        src: "I_7_.html"
      }
    ]
  },
  {
    title: "ENDOCRINOLOGIA",
    subchapters: [
      {
        title: "BASES FÍSICAS DE LA MEDICINA NUCLEAR",
        src: "I_1_.html"
      },
      {
        title: "INSTRUMENTACIÓN GAMMACAMARA Y SPECT",
        src: "I_2_.html"
      },
      {
        title: "INSTRUMENTACIÓN PET-TC",
        src: "I_3_.html"
      }
    ]
  }
];
