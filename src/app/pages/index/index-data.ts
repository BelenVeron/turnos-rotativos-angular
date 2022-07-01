export const MODAL_DATA = [
    {
        image: 'https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_960_720.jpg',
        size: 300
    },
    {
        subtitle: 'Descripción',
        description: `Desarrollo de aplicacion web angular basado en el trabajo práctico 2 de java. Se trata del manejo de jornadas laborales de empleados con ciertos criterios y validaciones tratados en el inciso de ese práctico. Se intenta consumir esa api y mostrarla en forma visual desde Frontend. Para que sea mas sencillo las pruebas se realiza deploy del api en Heroku y se consume el api desde ahí.
Para ver el código fuente del api de java se pude ir al link del repositorio`,
        link: 'https://github.com/BelenVeron/tp2-turnos-rotativos'
    },
    {
        description: `Y el repositorio de esta aplicación en angular`,
        link: 'https://github.com/BelenVeron/turnos-rotativos-angular'
    },
    {
        subtitle: 'Páginas',
        description: 'Son 3 paginas: Empleado, Jornada y Tipo de Jornada. Cada una con el manejo de los datos correspondientes'
    },
    {
        subtitle: 'Componentes',
        description: 'Se intentó realizar componentes que sean dinámicos donde se pueden ir configurando los elementos que se necesitan de acuerdo a su funcionalidad. Se describe con mas detalle adelante.'
    },
    {
        subtitle: 'FormComponent',
        description: `Se envian los datos a travez del atributo dataForm en forma de array de objeto con las siguiente forma: 
          {
            type: 'input',
            name: 'dni',
            value: 'Dni',
            validations: [
              { type: 'required', message: 'El dni es requerido' },
              { type: 'minlength', value: 7, message: 'Debe contener al menos 7 digitos' },
              { type: 'maxlength', value: 8, message: 'Debe contener maximo 8 digitos' }
            ]
          }`
    },
    {
        subtitle: 'ModalComponent',
        description: `Se envian los datos muy parecido al FormComponent, pero se agrega el model, este contiene el valor asignado en la base de datos: 
          {
            type: 'input',
            name: 'dni',
            value: 'Dni',
            validations: [
              { type: 'required', message: 'El dni es requerido' },
              { type: 'minlength', value: 7, message: 'Debe contener al menos 7 digitos' },
              { type: 'maxlength', value: 8, message: 'Debe contener maximo 8 digitos' }
            ],
            model: ''
          }
    Este atributo model se setea en la funcion getValue()`
    },
    {
        subtitle: 'TableComponent',
        description: 'Las columnas se asignan a la propiedad displayedColumns y los elementos que va a tener cada campo en dataSource. Dentro de displayedColumns se envia tambien los botones que pueden llegar a tener, en esta aplicacion puede ser editar o eliminar, si se realiza click envia un evento diciendo que tipo de boto se hizo click'
    },
    {
        subtitle: 'Este modal puede ser abierto por el botón de ayuda ubicado en la parte superior de la pagina'
    }
]