export const alumnos = [
  {
    id: 0,
    nombre: "Carlos",
    apellidos: "Ramirez Perez",
    grupoId: 0,
    grupo: "Primero A",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 7
      },
      {
        nombre: "Parcial 3",
        nota: 5
      },
      {
        nombre: "Parcial 4",
        nota: 8
      }
    ]
  },
  {
    id: 1,
    nombre: "Rafael",
    apellidos: "Santamaría Carmona",
    grupoId: 0,
    grupo: "Primero A",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 4
      },
      {
        nombre: "Parcial 3",
        nota: 9
      },
      {
        nombre: "Parcial 4",
        nota: 3
      }
    ]
  },
  {
    id: 2,
    nombre: "Irene",
    apellidos: "Gomez Carmona",
    grupoId: 0,
    grupo: "Primero A",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 5
      },
      {
        nombre: "Parcial 3",
        nota: 5
      },
      {
        nombre: "Parcial 4",
        nota: 3
      }
    ]
  },
  {
    id: 3,
    nombre: "Paula",
    apellidos: "Cabrera Ramirez",
    grupoId: 0,
    grupo: "Primero A",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 8
      },
      {
        nombre: "Parcial 2",
        nota: 7
      },
      {
        nombre: "Parcial 3",
        nota: 7
      },
      {
        nombre: "Parcial 4",
        nota: 8
      }
    ]
  },
  {
    id: 4,
    nombre: "Luis",
    apellidos: "Sota Reay",
    grupoId: 1,
    grupo: "Primero B",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 3
      },
      {
        nombre: "Parcial 2",
        nota: 5
      },
      {
        nombre: "Parcial 3",
        nota: 5
      },
      {
        nombre: "Parcial 4",
        nota: 5
      }
    ]
  },
  {
    id: 5,
    nombre: "Jaime",
    apellidos: "Santamaría Loreto",
    grupoId: 1,
    grupo: "Primero B",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 6
      },
      {
        nombre: "Parcial 3",
        nota: 5
      },
      {
        nombre: "Parcial 4",
        nota: 5
      }
    ]
  },
  {
    id: 6,
    nombre: "Lucía",
    apellidos: "Trece Catorce",
    grupoId: 1,
    grupo: "Primero B",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 4
      },
      {
        nombre: "Parcial 3",
        nota: 3
      },
      {
        nombre: "Parcial 4",
        nota: 2
      }
    ]
  },
  {
    id: 7,
    nombre: "Miguel",
    apellidos: "Sabado Domingo",
    grupoId: 1,
    grupo: "Primero B",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 7
      },
      {
        nombre: "Parcial 3",
        nota: 8
      },
      {
        nombre: "Parcial 4",
        nota: 8
      }
    ]
  },
  {
    id: 8,
    nombre: "Felipe",
    apellidos: "Zamora Galicia",
    grupoId: 2,
    grupo: "Segundo A",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 9
      },
      {
        nombre: "Parcial 2",
        nota: 9
      },
      {
        nombre: "Parcial 3",
        nota: 10
      },
      {
        nombre: "Parcial 4",
        nota: 8
      }
    ]
  },
  {
    id: 9,
    nombre: "Federico",
    apellidos: "Nogareda Cabrera",
    grupoId: 2,
    grupo: "Segundo A",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 7
      },
      {
        nombre: "Parcial 3",
        nota: 5
      },
      {
        nombre: "Parcial 4",
        nota: 8
      }
    ]
  },
  {
    id: 11,
    nombre: "Antonio",
    apellidos: "Getafe Parla",
    grupoId: 2,
    grupo: "Segundo A",
    parciales: [
      {
        nombre: "Parcial 1",
        nota: 6
      },
      {
        nombre: "Parcial 2",
        nota: 2
      },
      {
        nombre: "Parcial 3",
        nota: 5
      },
      {
        nombre: "Parcial 4",
        nota: 3
      }
    ]
  }
]
export const grupos = [
  {
    id: 0,
    nombre: "primero A",
    curso: "Primero",
    plan: "Plan Primero",
    planId: 0
  },
  {
    id: 1,
    nombre: "primero B",
    curso: "Primero",
    plan: "Plan Primero",
    planId: 0
  },
  {
    id: 2,
    nombre: "Segundo A",
    curso: "Segundo",
    plan: "Plan Segundo",
    planId: 1
  },
  {
    id: 3,
    nombre: "Segundo B",
    curso: "Segundo",
    planId: 1
  }
];

export const planes = [
  {
    id: 0,
    nombre: "Plan Primero",
    parciales: [
      {
        id: 0,
        nombreParcial: "primero p1",
        pesoParcial: 15
      },
      {
        id: 1,
        nombreParcial: "primero p2",
        pesoParcial: 15
      },
      {
        id: 2,
        nombreParcial: "primero p3",
        pesoParcial: 15
      },
      {
        id: 3,
        nombreParcial: "primero p4",
        pesoParcial: 15
      }
    ]
  },
  {
    id: 1,
    nombre: "Plan Segundo",
    parciales: [
      {
        id: 0,
        nombreParcial: "segundo p1",
        pesoParcial: 15
      },
      {
        id: 1,
        nombreParcial: "segundo p2",
        pesoParcial: 15
      },
      {
        id: 2,
        nombreParcial: "segundo p3",
        pesoParcial: 15
      },
      {
        id: 3,
        nombreParcial: "segundo p4",
        pesoParcial: 15
      }
    ]
  },
  {
    id: 2,
    nombre: "Plan Tercero",
    parciales: [
      {
        id: 0,
        nombreParcial: "parcial tercero 1",
        pesoParcial: 15
      },
      {
        id: 1,
        nombreParcial: "parcial tercero 2",
        pesoParcial: 15
      },
      {
        id: 2,
        nombreParcial: "parcial tercero 3",
        pesoParcial: 15
      },
      {
        id: 3,
        nombreParcial: "parcial tercero 4",
        pesoParcial: 15
      }
    ]
  }
];
