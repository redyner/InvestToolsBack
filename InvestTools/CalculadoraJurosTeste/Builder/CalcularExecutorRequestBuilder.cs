using CalculadoraJuros.Entities;
using CalculadoraJuros.Enums;
using CalculadoraJuros.Executores.CalcularExecutor;

namespace CalculadoraJurosTeste.Builder
{
    public class CalcularExecutorRequestBuilder
    {
        private readonly CalcularExecutorRequest _instancia;

        public CalcularExecutorRequestBuilder()
        {
            _instancia = new CalcularExecutorRequest
            {
                Inicial = 100,
                Periodo = new Periodo { Valor = 10, TipoPeriodo = TipoPeriodo.Anual},
                Juros = new Juros { Valor = 12, TipoPeriodo = TipoPeriodo.Anual},
                Aportes = new List<Aporte> { new Aporte {Valor = 100, Mes = 0 }, new Aporte { Valor = 200, Mes = 1 } },                
            };
        }

        public CalcularExecutorRequest Build()
        {
            return _instancia;
        }
    }
}
