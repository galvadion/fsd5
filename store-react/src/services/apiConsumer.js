/*
    Sacamos un metodo fetch genérico para evitar reiteración que recibe
    la RUTA a la que le vamos a "pegar" (API),
    las opciones que van a determinar si es un GET, POST, PUT o PATCH y los encabezados correspondientes.
    La función que se va a ejecutar si todo sale bien (onSuccess),
    la función que se va a ejecutar si algo sale mal (onFail) 
*/
export const fetchData = (API, options, onSucess, onFail) => 
    fetch(API, options).then(response =>{
        if(response.status.toString().startsWith("20")){ 
            /* 
                Si la respuesta esta dentro de los parametros de respuesta valida
                ejecutamos la función exitosa
            */
            return response.json().then(onSucess)
        }else{
            /* 
                Si no ejecutar la función de onFail
            */
            return response.json().then(onFail)
        }
    }).catch(onFail)