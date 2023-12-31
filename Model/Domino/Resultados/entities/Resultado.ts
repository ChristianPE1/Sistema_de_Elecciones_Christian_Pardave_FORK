/*export namespace Dominio.Resultados.entities */
export namespace Dominio {
  export class Resultado {
    private idResultado: number;
    private idEleccion: number;
    private totalVotos: number;
    private ganador: boolean;

    /**
     * Default constructor
     */
    public constructor(
      idResultado: number,
      idEleccion: number,
      totalVotos: number,
      ganador: boolean
    ) {
      this.idResultado = idResultado;
      this.idEleccion = idEleccion;
      this.totalVotos = totalVotos;
      this.ganador = ganador;
    }

    // Getter methods
    public getIdResultado(): number {
      return this.idResultado;
    }

    public getIdEleccion(): number {
      return this.idEleccion;
    }

    public getTotalVotos(): number {
      return this.totalVotos;
    }

    public getGanador(): boolean {
      return this.ganador;
    }

    // Setter methods
    public setIdResultado(idResultado: number): void {
      this.idResultado = idResultado;
    }

    public setIdEleccion(idEleccion: number): void {
      this.idEleccion = idEleccion;
    }

    public setTotalVotos(totalVotos: number): void {
      this.totalVotos = totalVotos;
    }

    public setGanador(ganador: boolean): void {
      this.ganador = ganador;
    }
  }
}
