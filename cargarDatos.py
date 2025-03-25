# Función para cargar los datos
def cargar_datos():
    nombre = input("Ingrese su nombre: ")
    apellido = input("Ingrese su apellido: ")
    dni = input("Ingrese su DNI: ")
    
    telefonos = []
    while True:
        telefono = input("Ingrese un número de teléfono (o deje vacío para terminar): ")
        if telefono:
            telefonos.append(telefono)
        else:
            persona = [nombre, apellido, dni, telefonos]
            print("\nDatos cargados:")
            print(persona)
            break

# Llamada a la función para cargar los datos
cargar_datos()
