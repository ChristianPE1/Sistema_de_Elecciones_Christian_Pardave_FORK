import * as mysql from "mysql";

namespace Dominio.Resultados.vos {
  class Class1 {
    /**
     * Default constructor
     */
    constructor() {
      // ...
    }

    /**
     * Implement this method to get election results.
     */
    public resultadosEleccion() {
      // Configuración de la conexión a la base de datos MySQL
      const connection = mysql.createConnection({
        host: "localhost", // Cambiar por el host de tu base de datos
        user: "usuario", // Cambiar por el usuario de tu base de datos
        password: "contraseña", // Cambiar por la contraseña de tu base de datos
        database: "nombre_base_de_datos", // Cambiar por el nombre de tu base de datos
      });

      // Realizar la conexión a la base de datos
      connection.connect();

      // Consulta SQL para obtener los id_candidato y los numero_de_votos
      const consultaSQL = "SELECT id_candidato, numero_de_votos FROM Votos";

      // Ejecutar la consulta SQL
      connection.query(consultaSQL, (error, results) => {
        if (error) {
          // Manejo de errores, por ejemplo, lanzar una excepción o retornar un mensaje de error.
          console.error(
            "Error al obtener los resultados de la elección:",
            error.message
          );
          throw error;
        } else {
          // Procesar los resultados de la consulta y almacenarlos en arrays
          const arr_can: number[] = [];
          const arr_votos: number[] = [];

          for (const result of results) {
            arr_can.push(result.id_candidato);
            arr_votos.push(result.numero_de_votos);
          }

          // Ordenar los arrays en base a los número de votos (orden descendente)
          for (let i = 0; i < arr_votos.length - 1; i++) {
            for (let j = i + 1; j < arr_votos.length; j++) {
              if (arr_votos[i] < arr_votos[j]) {
                // Intercambiar los valores de arr_votos
                const tempVotos = arr_votos[i];
                arr_votos[i] = arr_votos[j];
                arr_votos[j] = tempVotos;

                // Intercambiar los valores correspondientes de arr_can para que estén en el mismo orden
                const tempCandidato = arr_can[i];
                arr_can[i] = arr_can[j];
                arr_can[j] = tempCandidato;
              }
            }
          }

          // Aquí tienes los arrays con los id_candidato y los numero_de_votos ordenados por votos descendentes
          console.log("ID de candidatos (ordenados por votos):", arr_can);
          console.log("Número de votos (ordenados por votos):", arr_votos);

          // TODO: Puedes realizar cualquier otro procesamiento necesario con los datos obtenidos.

          console.log("Resultados de la elección obtenidos con éxito.");
        }

        // Cerrar la conexión a la base de datos
        connection.end();
      });
    }
  }
}
