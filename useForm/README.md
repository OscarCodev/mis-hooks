# useForm

Ejemplo:

```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };
    
    const [ formValues, formFunctions ] = useForm( initialForm );

    // FormFunctions es un objeto que contiene 2 funciones:
    const { formChange, resetForm } = formFunctions;
```