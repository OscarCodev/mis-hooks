# useCounter Hook


Ejemplo de uso:
```
   const [counter1, counterFunctions] = useCounter(0);
   const { decrement, reset, increment } = counterFunctions;
```

useCounter() // recibe un valor por defecto
el segundo elemento del array es un objeto que contiene todas las funciones
ese objeto puede ser desestructurado 