export const FIELDS = [
  {
    type: 'input',
    name: 'dni',
    value: 'Dni'
  },
  {
    type: 'select',
    name: 'tipo',
    label: 'Seleccionar',
    options: [
        {value: 'Turno Normal'},
        {value: 'Turno Extra'},
        {value: 'Dia Libre'},
        {value: 'Vacaciones'}
    ]
  },
  {
    type: 'fecha',
    name: 'fecha',
    value: 'Fecha'
  },
  {
    type: 'hora',
    name: 'horaEntrada',
    value: 'Hora de entrada'
  },
  {
    type: 'hora',
    name: 'horaSalida',
    value: 'Hora de salida'
  },
  {
    type: 'save-button',
    value: 'Guardar'
  }
]