# useFetch

Ejemplo:
```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);

```

este custom hook es utilizado para hacer peticiones y tiene en cuenta que si el componente
esta desmontado no realiza la peticion. 