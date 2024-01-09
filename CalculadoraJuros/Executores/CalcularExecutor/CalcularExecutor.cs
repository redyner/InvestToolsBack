using CalculadoraJuros.Interfaces;

namespace CalculadoraJuros.Executores.CalcularExecutor
{
    public class CalcularExecutor : ICalcularExecutor
    {
        public async Task<CalcularExecutorResponse> Calcular(CalcularExecutorRequest request)
        {

            decimal total = request.ValorInicial;
            decimal investimento = 0;
            decimal juros = 0;


            var mesAtual = DateTime.Now.Month;

            for (int i = 1; i <= request.Periodo.Valor; i++)
            {
                var aporte = request.Aporte.Find(a => a.Mes == mesAtual);
                if (aporte != null)
                {
                    total += aporte.Valor;
                    investimento += aporte.Valor;
                }

                juros += total * request.TaxaJuros.Valor / 100;

                total *= 1 + request.TaxaJuros.Valor / 100;

                mesAtual++;
            }

            return new CalcularExecutorResponse
            {
                Total = total,
                Investimento = investimento,
                Juros = juros
            };
        }
    }
}
