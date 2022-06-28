export const FIELDS = [
  {
    name: 'dni',
    value: 'Dni',
  },
  {
    type: 'select',
    name: 'tipoJornada',
    label: 'Seleccionar',
    options: [
        {value: 'Turno Normal'},
        {value: 'Turno Extra'},
        {value: 'Dia Libre'},
        {value: 'Vacaciones'}
    ],
    model: ''
  },
  {
    type: 'fecha',
    name: 'fecha',
    value: 'Fecha',
    model: ''
  },
  {
    type: 'hora',
    name: 'horaEntrada',
    value: 'Hora de entrada',
    model: ''
  },
  {
    type: 'hora',
    name: 'horaSalida',
    value: 'Hora de salida',
    model: ''
  },
  {
    type: 'save-button',
    value: 'Guardar'
  }
]