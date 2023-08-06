import * as mysql from "mysql";
//import { Resultado } from "../entities/Resultado";

namespace Dominio.Resultados.service {
  export class OperacionesServicios {
    //private resultados: Resultados[] = [];
    //private resultados: Dominio.Resultados.Resultado[] = [];
    constructor() {
      // ...
    }

    /**
     * Implement this method to perform vote counting.
     */
    public async recuentoVotos() {
      try {
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
              "Error al realizar el recuento de votos:",
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

            // Aquí tienes los arrays con los id_candidato y los numero_de_votos
            console.log("ID de candidatos:", arr_can);
            console.log("Número de votos:", arr_votos);

            console.log("Recuento de votos realizado con éxito.");
          }

          // Cerrar la conexión a la base de datos
          connection.end();
        });
      } catch (error: any) {
        console.error("Error al realizar el recuento de votos:", error.message);
        throw error;
      }
    }

    /**
     * Implement this method to send result notifications.
     */
    public notificacionResultados() {
      console.log("Notificaciones de resultados enviadas correctamente.");
    }
  }
}
