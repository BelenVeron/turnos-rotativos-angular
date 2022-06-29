import { TipoJornada } from "src/app/models/tipo-jornada"

export const FIELDS_ADD = [
  {
    type: 'input',
    name: 'dni',
    value: 'Dni',
  },
  {
    type: 'select',
    name: 'tipoJornada',
    label: 'Seleccionar',
    model: '',
    options: [] as string[]
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

export const FIELDS_UPDATE = [
  {
   id: ''
  },
  {
    name: 'dni',
    value: 'Dni',
  },
  {
    type: 'select',
    name: 'tipoJornada',
    label: 'Seleccionar',
    options: [] as string[],
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