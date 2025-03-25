// Función para leer la entrada del usuario en la terminal
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para cargar los datos
function cargarDatos() {
    rl.question("Ingrese su nombre: ", (nombre) => {
        rl.question("Ingrese su apellido: ", (apellido) => {
            rl.question("Ingrese su DNI: ", (dni) => {
                let telefonos = [];
                let agregarTelefono = () => {
                    rl.question("Ingrese un número de teléfono (o deje vacío para terminar): ", (telefono) => {
                        if (telefono) {
                            telefonos.push(telefono);
                            agregarTelefono();
                        } else {
                            let persona = [nombre, apellido, dni, telefonos];
                            console.log("\nDatos cargados:");
                            console.log(persona);
                            rl.close();
                        }
                    });
                };
                agregarTelefono();
            });
        });
    });
}

cargarDatos();

