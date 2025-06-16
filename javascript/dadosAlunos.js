const alunos = [
  {
    nome: "Luigi Carvalho", curso: "Enfermagem", matricula: 201376672,
    historico_probabilidade_evasao: {
      2020: 0.75,
      2021: 0.85,
      2022: 0.92,
      2023: 0.92,
      2024: 1.0
    }
  },
  {
    nome: "Joana Mendes", curso: "Engenharia Civil", matricula: 206533397,
    historico_probabilidade_evasao: {
      2020: 0.61,
      2021: 0.65,
      2022: 0.75,
      2023: 0.14,
      2024: 0.41
    }
  },
  {
    nome: "Joaquim Freitas", curso: "Física", matricula: 202710378,
    historico_probabilidade_evasao: {
      2020: 0.62,
      2021: 0.57,
      2022: 0.73,
      2023: 0.25,
      2024: 0.40
    }
  },
  {
    nome: "Alexandre Viana", curso: "Direito", matricula: 203631208,
    historico_probabilidade_evasao: {
      2020: 0.62,
      2021: 0.57,
      2022: 0.73,
      2023: 0.25,
      2024: 0.40
    }
  },
  {
    nome: "Joana Fernandes", curso: "Física", matricula: 209477602,
    historico_probabilidade_evasao: {
      2020: 0.62,
      2021: 0.57,
      2022: 0.73,
      2023: 0.25,
      2024: 0.40
    }
  },
  {
    nome: "Maria Alice Rodrigues", curso: "Enfermagem", matricula: 202507501,
    historico_probabilidade_evasao: {
      2020: 0.36,
      2021: 0.44,
      2022: 0.38,
      2023: 0.48,
      2024: 0.29
    }
  },
  {
    nome: "Davi Lucca da Cunha", curso: "Arquitetura", matricula: 206136926,
    historico_probabilidade_evasao: {
      2020: 0.54,
      2021: 0.41,
      2022: 0.67,
      2023: 0.32,
      2024: 0.60
    }
  },
  {
    nome: "Maria Clara Pereira", curso: "Economia", matricula: 202598654,
    historico_probabilidade_evasao: {
      2020: 0.77,
      2021: 0.49,
      2022: 0.55,
      2023: 0.18,
      2024: 0.36
    }
  },
  {
    nome: "Sra. Isabella Moraes", curso: "Física", matricula: 209802201,
    historico_probabilidade_evasao: {
      2020: 0.33,
      2021: 0.69,
      2022: 0.44,
      2023: 0.27,
      2024: 0.54
    }
  },
  {
    nome: "Igor Teixeira", curso: "Educação Física", matricula: 202326002,
    historico_probabilidade_evasao: {
      2020: 0.41,
      2021: 0.62,
      2022: 0.35,
      2023: 0.48,
      2024: 0.50
    }
  },
  {
    nome: "Bruna Gomes", curso: "Sociologia", matricula: 201064051,
    historico_probabilidade_evasao: {
      2020: 0.56,
      2021: 0.38,
      2022: 0.69,
      2023: 0.30,
      2024: 0.42
    }
  },
  {
    nome: "Srta. Beatriz Nogueira", curso: "Direito", matricula: 201896243,
    historico_probabilidade_evasao: {
      2020: 0.29,
      2021: 0.53,
      2022: 0.46,
      2023: 0.43,
      2024: 0.34
    }
  },
  {
    nome: "Diogo Barros", curso: "Biologia", matricula: 207853699,
    historico_probabilidade_evasao: {
      2020: 0.47,
      2021: 0.40,
      2022: 0.52,
      2023: 0.22,
      2024: 0.61
    }
  },
  {
    nome: "Maria Fernanda Fernandes", curso: "Contabilidade", matricula: 203677752,
    historico_probabilidade_evasao: {
      2020: 0.44,
      2021: 0.58,
      2022: 0.37,
      2023: 0.48,
      2024: 0.28
    }
  },
  {
    nome: "Eloah Barbosa", curso: "Matemática", matricula: 204848629,
    historico_probabilidade_evasao: {
      2020: 0.60,
      2021: 0.35,
      2022: 0.64,
      2023: 0.26,
      2024: 0.49
    }
  },
  {
    nome: "Vitor da Mata", curso: "Geografia", matricula: 209049996,
    historico_probabilidade_evasao: {
      2020: 0.51,
      2021: 0.39,
      2022: 0.59,
      2023: 0.33,
      2024: 0.43
    }
  },
  {
    nome: "Sarah Dias", curso: "História", matricula: 209311812,
    historico_probabilidade_evasao: {
      2020: 0.42,
      2021: 0.65,
      2022: 0.34,
      2023: 0.50,
      2024: 0.37
    }
  },
  {
    nome: "Caroline Teixeira", curso: "Enfermagem", matricula: 203391983,
    historico_probabilidade_evasao: {
      2020: 0.38,
      2021: 0.44,
      2022: 0.41,
      2023: 0.62,
      2024: 0.33
    }
  },
  {
    nome: "Bruno Araújo", curso: "Matemática", matricula: 208964621,
    historico_probabilidade_evasao: {
      2020: 0.55,
      2021: 0.47,
      2022: 0.53,
      2023: 0.29,
      2024: 0.45
    }
  },
  {
    nome: "Igor Teixeira", curso: "Educação Física", matricula: 208124002,
    historico_probabilidade_evasao: {
      2020: 0.63,
      2021: 0.32,
      2022: 0.44,
      2023: 0.40,
      2024: 0.57
    }
  },
  {
    nome: "Lavínia Farias", curso: "Letras", matricula: 203306853,
    historico_probabilidade_evasao: {
      2020: 0.48,
      2021: 0.51,
      2022: 0.37,
      2023: 0.45,
      2024: 0.29
    }
  },
  {
    nome: "João Miguel Cardoso", curso: "Direito", matricula: 207740913,
    historico_probabilidade_evasao: {
      2020: 0.39,
      2021: 0.55,
      2022: 0.50,
      2023: 0.36,
      2024: 0.41
    }
  },
  {
    nome: "Elisa Peixoto", curso: "Engenharia Civil", matricula: 204289207,
    historico_probabilidade_evasao: {
      2020: 0.44,
      2021: 0.48,
      2022: 0.43,
      2023: 0.28,
      2024: 0.36
    }
  },
  {
    nome: "Emanuella Moreira", curso: "Letras", matricula: 202049425,
    historico_probabilidade_evasao: {
      2020: 0.57,
      2021: 0.44,
      2022: 0.66,
      2023: 0.29,
      2024: 0.53
    }
  },
  {
    nome: "Srta. Isis Vieira", curso: "Medicina", matricula: 201505917,
    historico_probabilidade_evasao: {
      2020: 0.38,
      2021: 0.59,
      2022: 0.41,
      2023: 0.47,
      2024: 0.36
    }
  },
  {
    nome: "Luiza Barbosa", curso: "Contabilidade", matricula: 204912968,
    historico_probabilidade_evasao: {
      2020: 0.63,
      2021: 0.32,
      2022: 0.54,
      2023: 0.40,
      2024: 0.69
    }
  },
  {
    nome: "Ana Carolina Pires", curso: "Design", matricula: 206532076,
    historico_probabilidade_evasao: {
      2020: 0.48,
      2021: 0.70,
      2022: 0.39,
      2023: 0.55,
      2024: 0.28
    }
  },
  {
    nome: "Dr. Danilo Mendes", curso: "Arquitetura", matricula: 205508143,
    historico_probabilidade_evasao: {
      2020: 0.41,
      2021: 0.36,
      2022: 0.60,
      2023: 0.34,
      2024: 0.50
    }
  },
  {
    nome: "Joaquim Cavalcanti", curso: "Ciência da Computação", matricula: 207670695,
    historico_probabilidade_evasao: {
      2020: 0.77,
      2021: 0.45,
      2022: 0.68,
      2023: 0.22,
      2024: 0.44
    }
  },
  {
    nome: "Sr. Thales Jesus", curso: "Administração", matricula: 203551876,
    historico_probabilidade_evasao: {
      2020: 0.29,
      2021: 0.54,
      2022: 0.43,
      2023: 0.66,
      2024: 0.31
    }
  },
  {
    nome: "Sabrina da Mata", curso: "Medicina", matricula: 202572748,
    historico_probabilidade_evasao: {
      2020: 0.53,
      2021: 0.47,
      2022: 0.33,
      2023: 0.58,
      2024: 0.40
    }
  },
  {
    nome: "Luiz Otávio Caldeira", curso: "Design", matricula: 203688683,
    historico_probabilidade_evasao: {
      2020: 0.35,
      2021: 0.62,
      2022: 0.49,
      2023: 0.28,
      2024: 0.54
    }
  },
  {
    nome: "Raul Aragão", curso: "Direito", matricula: 200779117,
    historico_probabilidade_evasao: {
      2020: 0.44,
      2021: 0.39,
      2022: 0.51,
      2023: 0.61,
      2024: 0.27
    }
  },
  {
    nome: "Kamilly Teixeira", curso: "Química", matricula: 205778312,
    historico_probabilidade_evasao: {
      2020: 0.58,
      2021: 0.34,
      2022: 0.64,
      2023: 0.30,
      2024: 0.48
    }
  },
  {
    nome: "Emanuelly da Conceição", curso: "Economia", matricula: 200573331,
    historico_probabilidade_evasao: {
      2020: 0.41,
      2021: 0.50,
      2022: 0.37,
      2023: 0.72,
      2024: 0.33
    }
  },
  {
    nome: "Breno Novaes", curso: "Sociologia", matricula: 205116850,
    historico_probabilidade_evasao: {
      2020: 0.36,
      2021: 0.67,
      2022: 0.55,
      2023: 0.23,
      2024: 0.59
    }
  },
  {
    nome: "Luiz Henrique da Paz", curso: "Educação Física", matricula: 207197687,
    historico_probabilidade_evasao: {
      2020: 0.52,
      2021: 0.41,
      2022: 0.48,
      2023: 0.35,
      2024: 0.43
    }
  },
  {
    nome: "Bruna Rezende", curso: "Jornalismo", matricula: 207265918,
    historico_probabilidade_evasao: {
      2020: 0.46,
      2021: 0.56,
      2022: 0.39,
      2023: 0.64,
      2024: 0.29
    }
  },
  {
    nome: "Bryan Ramos", curso: "Direito", matricula: 201294898,
    historico_probabilidade_evasao: {
      2020: 0.33,
      2021: 0.61,
      2022: 0.44,
      2023: 0.38,
      2024: 0.50
    }
  },
  {
    nome: "Vitor Gabriel Rocha", curso: "História", matricula: 201141753,
    historico_probabilidade_evasao: {
      2020: 0.69,
      2021: 0.27,
      2022: 0.58,
      2023: 0.42,
      2024: 0.36
    }
  },
  {
    nome: "Carolina Mendes", curso: "Contabilidade", matricula: 205233466,
    historico_probabilidade_evasao: {
      2020: 0.55,
      2021: 0.38,
      2022: 0.62,
      2023: 0.34,
      2024: 0.48
    }
  },
  {
    nome: "Ana Carolina Costela", curso: "Biologia", matricula: 209203529,
    historico_probabilidade_evasao: {
      2020: 0.47,
      2021: 0.53,
      2022: 0.31,
      2023: 0.60,
      2024: 0.40
    }
  },
  {
    nome: "Isabel Azevedo", curso: "Engenharia Elétrica", matricula: 206503225,
    historico_probabilidade_evasao: {
      2020: 0.39,
      2021: 0.45,
      2022: 0.54,
      2023: 0.29,
      2024: 0.61
    }
  },
  {
    nome: "Samuel Alves", curso: "Enfermagem", matricula: 209404610,
    historico_probabilidade_evasao: {
      2020: 0.52,
      2021: 0.47,
      2022: 0.60,
      2023: 0.33,
      2024: 0.49
    }
  },
  {
    nome: "Emilly Rocha", curso: "Contabilidade", matricula: 200686735,
    historico_probabilidade_evasao: {
      2020: 0.41,
      2021: 0.39,
      2022: 0.58,
      2023: 0.26,
      2024: 0.54
    }
  },
  {
    nome: "Renan Freitas", curso: "Sociologia", matricula: 207494754,
    historico_probabilidade_evasao: {
      2020: 0.67,
      2021: 0.34,
      2022: 0.44,
      2023: 0.31,
      2024: 0.42
    }
  },
  {
    nome: "Cecília Nascimento", curso: "Jornalismo", matricula: 203090174,
    historico_probabilidade_evasao: {
      2020: 0.58,
      2021: 0.44,
      2022: 0.39,
      2023: 0.51,
      2024: 0.35
    }
  },
  {
    nome: "Gustavo Henrique Pinto", curso: "Enfermagem", matricula: 201764786,
    historico_probabilidade_evasao: {
      2020: 0.33,
      2021: 0.48,
      2022: 0.52,
      2023: 0.29,
      2024: 0.46
    }
  },
  {
    nome: "Gustavo Castro", curso: "Engenharia Elétrica", matricula: 201369119,
    historico_probabilidade_evasao: {
      2020: 0.39,
      2021: 0.62,
      2022: 0.35,
      2023: 0.40,
      2024: 0.50
    }
  },
  {
    nome: "Sra. Natália Martins", curso: "Ciência da Computação", matricula: 206271471,
    historico_probabilidade_evasao: {
      2020: 0.39,
      2021: 0.62,
      2022: 0.35,
      2023: 0.40,
      2024: 0.50
    }
  },
  {
    nome: "João Souza", curso: "Artes Visuais", matricula: 204830280,
    historico_probabilidade_evasao: {
      2020: 0.61,
      2021: 0.42,
      2022: 0.57,
      2023: 0.37,
      2024: 0.30
    }
  },
  {
    nome: "Davi Lucas Barbosa", curso: "Publicidade e Propaganda", matricula: 205828029,
    historico_probabilidade_evasao: {
      2020: 0.68,
      2021: 0.47,
      2022: 0.52,
      2023: 0.31,
      2024: 0.22
    }
  },
  {
    nome: "Sr. Pedro Mendes", curso: "Ciência da Computação", matricula: 209421060,
    historico_probabilidade_evasao: {
      2020: 0.46,
      2021: 0.38,
      2022: 0.49,
      2023: 0.60,
      2024: 0.32
    }
  },
  {
    nome: "Beatriz da Conceição", curso: "Filosofia", matricula: 209782647,
    historico_probabilidade_evasao: {
      2020: 0.55,
      2021: 0.40,
      2022: 0.43,
      2023: 0.34,
      2024: 0.47
    }
  },
  {
    nome: "Luna Silva", curso: "Geografia", matricula: 206331771,
    historico_probabilidade_evasao: {
      2020: 0.50,
      2021: 0.37,
      2022: 0.66,
      2023: 0.22,
      2024: 0.59
    }
  },
  {
    nome: "Helena Cardoso", curso: "Enfermagem", matricula: 206041259,
    historico_probabilidade_evasao: {
      2020: 0.43,
      2021: 0.51,
      2022: 0.40,
      2023: 0.48,
      2024: 0.36
    }
  },
  {
    nome: "Olivia Castro", curso: "Economia", matricula: 205377512,
    historico_probabilidade_evasao: {
      2020: 0.60,
      2021: 0.35,
      2022: 0.38,
      2023: 0.41,
      2024: 0.52
    }
  },
  {
    nome: "Gabrielly Lopes", curso: "Publicidade e Propaganda", matricula: 204772468,
    historico_probabilidade_evasao: {
      2020: 0.28,
      2021: 0.46,
      2022: 0.45,
      2023: 0.57,
      2024: 0.31
    }
  },
  {
    nome: "Emilly da Rocha", curso: "Artes Visuais", matricula: 209356743,
    historico_probabilidade_evasao: {
      2020: 0.59,
      2021: 0.29,
      2022: 0.63,
      2023: 0.39,
      2024: 0.33
    }
  },
  {
    nome: "Laura da Cunha", curso: "Química", matricula: 209066504,
    historico_probabilidade_evasao: {
      2020: 0.47,
      2021: 0.55,
      2022: 0.36,
      2023: 0.43,
      2024: 0.44
    }
  },
  {
    nome: "João Miguel Teixeira", curso: "Filosofia", matricula: 202552545,
    historico_probabilidade_evasao: {
      2020: 0.42,
      2021: 0.60,
      2022: 0.51,
      2023: 0.27,
      2024: 0.38
    }
  },
  {
    nome: "Yasmin Aragão", curso: "Ciência da Computação", matricula: 204015723,
    historico_probabilidade_evasao: {
      2020: 0.65,
      2021: 0.33,
      2022: 0.56,
      2023: 0.35,
      2024: 0.40
    }
  },
  {
    nome: "Augusto das Neves", curso: "Engenharia Civil", matricula: 203979809,
    historico_probabilidade_evasao: {
      2020: 0.35,
      2021: 0.49,
      2022: 0.42,
      2023: 0.61,
      2024: 0.34
    }
  },
  {
    nome: "Clarice Aragão", curso: "Letras", matricula: 209347198,
    historico_probabilidade_evasao: {
      2020: 0.38,
      2021: 0.49,
      2022: 0.57,
      2023: 0.31,
      2024: 0.46
    }
  },
  {
    nome: "Kevin Pires", curso: "Jornalismo", matricula: 204154213,
    historico_probabilidade_evasao: {
      2020: 0.53,
      2021: 0.35,
      2022: 0.62,
      2023: 0.44,
      2024: 0.41
    }
  },
  {
    nome: "Heloísa Rezende", curso: "Publicidade e Propaganda", matricula: 203676475,
    historico_probabilidade_evasao: {
      2020: 0.47,
      2021: 0.56,
      2022: 0.39,
      2023: 0.29,
      2024: 0.52
    }
  },
  {
    nome: "Sr. Antônio Costa", curso: "História", matricula: 204167578,
    historico_probabilidade_evasao: {
      2020: 0.60,
      2021: 0.42,
      2022: 0.47,
      2023: 0.38,
      2024: 0.33
    }
  },
  {
    nome: "Kevin Cardoso", curso: "Direito", matricula: 207490854,
    historico_probabilidade_evasao: {
      2020: 0.29,
      2021: 0.63,
      2022: 0.40,
      2023: 0.55,
      2024: 0.37
    }
  },
  {
    nome: "Srta. Isabelly Ramos", curso: "Ciência da Computação", matricula: 201218748,
    historico_probabilidade_evasao: {
      2020: 0.44,
      2021: 0.50,
      2022: 0.36,
      2023: 0.61,
      2024: 0.30
    }
  },
  {
    nome: "Sr. Bernardo Viana", curso: "Enfermagem", matricula: 206064062,
    historico_probabilidade_evasao: {
      2020: 0.58,
      2021: 0.28,
      2022: 0.49,
      2023: 0.46,
      2024: 0.35
    }
  },
  {
    nome: "Agatha Rezende", curso: "Direito", matricula: 205207793,
    historico_probabilidade_evasao: {
      2020: 0.41,
      2021: 0.39,
      2022: 0.55,
      2023: 0.33,
      2024: 0.50
    }
  },
  {
    nome: "Fernanda Araújo", curso: "Direito", matricula: 205783596,
    historico_probabilidade_evasao: {
      2020: 0.36,
      2021: 0.64,
      2022: 0.42,
      2023: 0.26,
      2024: 0.59
    }
  },
  {
    nome: "Henrique Oliveira", curso: "Contabilidade", matricula: 203633711,
    historico_probabilidade_evasao: {
      2020: 0.51,
      2021: 0.46,
      2022: 0.30,
      2023: 0.60,
      2024: 0.48
    }
  },
  {
    nome: "Ana Laura Ferreira", curso: "Direito", matricula: 203837711,
    historico_probabilidade_evasao: {
      2020: 0.40,
      2021: 0.54,
      2022: 0.38,
      2023: 0.52,
      2024: 0.43
    }
  },
  {
    nome: "Beatriz Moreira", curso: "Economia", matricula: 201500479,
    historico_probabilidade_evasao: {
      2020: 0.67,
      2021: 0.33,
      2022: 0.44,
      2023: 0.40,
      2024: 0.29
    }
  },
  {
    nome: "Nina Mendes", curso: "Educação Física", matricula: 207474389,
    historico_probabilidade_evasao: {
      2020: 0.55,
      2021: 0.41,
      2022: 0.51,
      2023: 0.27,
      2024: 0.47
    }
  },
  {
    nome: "Isabella Pires", curso: "Filosofia", matricula: 203484984,
    historico_probabilidade_evasao: {
      2020: 0.43,
      2021: 0.38,
      2022: 0.61,
      2023: 0.32,
      2024: 0.40
    }
  },
  {
    nome: "Maria Luiza Alves", curso: "Ciência da Computação", matricula: 203017379,
    historico_probabilidade_evasao: {
      2020: 0.39,
      2021: 0.47,
      2022: 0.54,
      2023: 0.36,
      2024: 0.44
    }
  },
  {
    nome: "Kamilly Duarte", curso: "Economia", matricula: 207493276,
    historico_probabilidade_evasao: {
      2020: 0.46,
      2021: 0.59,
      2022: 0.35,
      2023: 0.48,
      2024: 0.34
    }
  },
  {
    nome: "Luiza Castro", curso: "Ciência da Computação", matricula: 209795876,
    historico_probabilidade_evasao: {
      2020: 0.33,
      2021: 0.45,
      2022: 0.37,
      2023: 0.63,
      2024: 0.31
    }
  },
  {
    nome: "Guilherme da Rosa", curso: "Arquitetura", matricula: 208424181,
    historico_probabilidade_evasao: {
      2020: 0.33,
      2021: 0.45,
      2022: 0.37,
      2023: 0.63,
      2024: 0.31
    }
  },
  {
    nome: "Vitória Mendes", curso: "Direito", matricula: 201981958,
    historico_probabilidade_evasao: {
      2020: 0.49,
      2021: 0.36,
      2022: 0.66,
      2023: 0.30,
      2024: 0.42
    }
  },
  {
    nome: "Carlos Eduardo da Costa", curso: "Jornalismo", matricula: 203516267,
    historico_probabilidade_evasao: {
      2020: 0.37,
      2021: 0.51,
      2022: 0.48,
      2023: 0.39,
      2024: 0.46
    }
  },
  {
    nome: "Matheus Pinto", curso: "Design", matricula: 209142411,
    historico_probabilidade_evasao: {
      2020: 0.61,
      2021: 0.40,
      2022: 0.59,
      2023: 0.34,
      2024: 0.28
    }
  },
  {
    nome: "Yago Campos", curso: "História", matricula: 208663740,
    historico_probabilidade_evasao: {
      2020: 0.42,
      2021: 0.50,
      2022: 0.45,
      2023: 0.33,
      2024: 0.55
    }
  },
  {
    nome: "João Guilherme Costela", curso: "Administração", matricula: 205347221,
    historico_probabilidade_evasao: {
      2020: 0.35,
      2021: 0.61,
      2022: 0.40,
      2023: 0.28,
      2024: 0.44
    }
  },
  {
    nome: "Luiz Miguel Barros", curso: "Enfermagem", matricula: 209180650,
    historico_probabilidade_evasao: {
      2020: 0.48,
      2021: 0.38,
      2022: 0.53,
      2023: 0.40,
      2024: 0.32
    }
  },
  {
    nome: "Nicolas Vieira", curso: "Química", matricula: 203901058,
    historico_probabilidade_evasao: {
      2020: 0.56,
      2021: 0.47,
      2022: 0.37,
      2023: 0.55,
      2024: 0.39
    }
  },
  {
    nome: "Vitor Hugo Monteiro", curso: "Jornalismo", matricula: 208546797,
    historico_probabilidade_evasao: {
      2020: 0.60,
      2021: 0.44,
      2022: 0.49,
      2023: 0.31,
      2024: 0.41
    }
  },
  {
    nome: "João Felipe da Cruz", curso: "Medicina", matricula: 208450557,
    historico_probabilidade_evasao: {
      2020: 0.39,
      2021: 0.33,
      2022: 0.42,
      2023: 0.60,
      2024: 0.48
    }
  },
  {
    nome: "Bruna Moura", curso: "Biologia", matricula: 205456119,
    historico_probabilidade_evasao: {
      2020: 0.54,
      2021: 0.58,
      2022: 0.35,
      2023: 0.44,
      2024: 0.37
    }
  },
  {
    nome: "Sr. Fernando Dias", curso: "Sociologia", matricula: 201342121,
    historico_probabilidade_evasao: {
      2020: 0.47,
      2021: 0.40,
      2022: 0.51,
      2023: 0.28,
      2024: 0.45
    }
  },
  {
    nome: "Pietro Alves", curso: "Psicologia", matricula: 202601645,
    historico_probabilidade_evasao: {
      2020: 0.45,
      2021: 0.62,
      2022: 0.33,
      2023: 0.29,
      2024: 0.54
    }
  },
  {
    nome: "Murilo Costa", curso: "Enfermagem", matricula: 203532566,
    historico_probabilidade_evasao: {
      2020: 0.41,
      2021: 0.37,
      2022: 0.60,
      2023: 0.32,
      2024: 0.39
    }
  },
  {
    nome: "Thales da Paz", curso: "Física", matricula: 200272564,
    historico_probabilidade_evasao: {
      2020: 0.50,
      2021: 0.49,
      2022: 0.43,
      2023: 0.45,
      2024: 0.31
    }
  },
  {
    nome: "Pietro Ribeiro", curso: "Biologia", matricula: 208602003,
    historico_probabilidade_evasao: {
      2020: 0.59,
      2021: 0.41,
      2022: 0.38,
      2023: 0.30,
      2024: 0.56
    }
  },
  {
    nome: "Vitor Hugo Moura", curso: "Enfermagem", matricula: 201309749,
    historico_probabilidade_evasao: {
      2020: 0.36,
      2021: 0.44,
      2022: 0.55,
      2023: 0.28,
      2024: 0.48
    }
  },
  {
    nome: "Ana Carvalho", curso: "Publicidade e Propaganda", matricula: 206269986,
    historico_probabilidade_evasao: {
      2020: 0.53,
      2021: 0.35,
      2022: 0.50,
      2023: 0.27,
      2024: 0.41
    }
  },
  {
    nome: "Maria Vitória da Luz", curso: "Artes Visuais", matricula: 200388779,
    historico_probabilidade_evasao: {
      2020: 0.48,
      2021: 0.39,
      2022: 0.42,
      2023: 0.60,
      2024: 0.33
    }
  },
  {
    nome: "Davi Lucas Araújo", curso: "Biologia", matricula: 202889529,
    historico_probabilidade_evasao: {
      2020: 0.57,
      2021: 0.46,
      2022: 0.34,
      2023: 0.43,
      2024: 0.50
    }
  }
];