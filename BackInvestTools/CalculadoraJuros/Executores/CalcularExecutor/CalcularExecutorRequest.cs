using CalculadoraJuros.Entities;

namespace CalculadoraJuros.Executores.CalcularExecutor
{
    public class CalcularExecutorRequest
    {
        public decimal ValorInicial { get; set; }
        public List<Aporte>? Aporte { get; set; }
        public Periodo? Periodo { get; set; }
        public TaxaJuros? TaxaJuros { get; set; }

    }
}
