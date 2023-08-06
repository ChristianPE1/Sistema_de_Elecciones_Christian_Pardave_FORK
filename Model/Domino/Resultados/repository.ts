namespace Dominio.Resultados {
  //interface Repository
  interface Region {
    resultadoPorRegion(): void;
  }
  interface Grafico {
    graficoResultado(): void;
  }

  class Repository implements Region, Grafico {
    public resultadoPorRegion(): void {
      console.log("Método resultadoPorRegion implementado.");
    }

    public graficoResultado(): void {
      console.log("Método graficoResultado implementado.");
    }
  }
}
