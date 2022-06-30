export const FIELDS = [
    {
      type: 'input',
      name: 'nombre',
      value: 'Nombre',
      validations: [
        { type: 'required', message: 'El nombre es requerido' }
      ]
    },
    {
      type: 'input',
      name: 'apellido',
      value: 'Apellido',
      validations: [
        { type: 'required', message: 'El apellido es requerido' }
      ]
    },
    {
      type: 'input',
      name: 'dni',
      value: 'Dni',
      validations: [
        { type: 'required', message: 'El dni es requerido' },
        { type: 'minlength', value: 7, message: 'Debe contener al menos 7 digitos' },
        { type: 'maxlength', value: 8, message: 'Debe contener maximo 8 digitos' }
      ]
    },
    {
      type: 'save-button',
      value: 'Guardar'
    },
  ]