using CalculadoraJuros.Enums;

namespace CalculadoraJuros.Entities
{
    public class TaxaJuros
    {
        public decimal Valor {  get; set; }
        public TipoPeriodo TipoPeriodo { get; set; }
    }
}
