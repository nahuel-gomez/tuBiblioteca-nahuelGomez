let confirmacion = true

const consultaPromesa = (time, task) => {
    return new Promise((resolve, reject) => {
        if (confirmacion) {
            setTimeout(() => {
                resolve(task)
            }, time)
        }else {
            reject("Error de carga")
        }
    })
}

export default consultaPromesa