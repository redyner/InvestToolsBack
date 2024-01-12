using CalculadoraJuros.Entities;

namespace CalculadoraJuros.Executores.CalcularExecutor
{
    public class CalcularExecutorRequest
    {
        public decimal Inicial { get; set; }
        public List<Aporte>? Aportes { get; set; }
        public Periodo? Periodo { get; set; }
        public Juros? Juros { get; set; }

    }
}
