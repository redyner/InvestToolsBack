using CalculadoraJuros.Entities;
using CalculadoraJuros.Enums;
using CalculadoraJuros.Interfaces;

namespace CalculadoraJuros.Executores.CalcularExecutor
{
    public class CalcularExecutor : ICalcularExecutor
    {
        public async Task<CalcularExecutorResponse> Calcular(CalcularExecutorRequest request)
        {

            CalcularExecutorResponse response = new CalcularExecutorResponse
            {
                Total = request.ValorInicial,
                Investimento = 0,
                Juros = 0
            };

            AplicaAportesETaxaPorPeriodo(request, response);

            AjusteCasasDecimais(response);

            return response;
        }
        private void AplicaAportesETaxaPorPeriodo(CalcularExecutorRequest request, CalcularExecutorResponse response)
        {
            var mesAtual = DateTime.Now.Month;

            CalculaPeriodo(request.Periodo);
            CalculaTaxa(request.TaxaJuros);

            for (int i = 1; i <= request.Periodo.Valor; i++)
            {
                var aporte = request.Aporte.Find(a => a.Mes == mesAtual);
                if (aporte != null)
                {
                    response.Total += aporte.Valor;
                    response.Investimento += aporte.Valor;
                }

                response.Juros += response.Total * request.TaxaJuros.Valor;

                response.Total *= 1 + request.TaxaJuros.Valor;

                if (mesAtual == 12)
                    mesAtual = 0;

                mesAtual++;
            }
        }

        private void CalculaTaxa(TaxaJuros taxaJuros)
        {
            if (taxaJuros.TipoPeriodo == TipoPeriodo.Anual)
                taxaJuros.Valor = taxaJuros.Valor / 12 / 100;
            else
                taxaJuros.Valor /= 100;
        }

        private void CalculaPeriodo(Periodo periodo)
        {
            if (periodo.TipoPeriodo == TipoPeriodo.Anual)
                periodo.Valor *= 12;
        }

        private void AjusteCasasDecimais(CalcularExecutorResponse response)
        {
            response.Total = Math.Round(response.Total, 2);
            response.Juros = Math.Round(response.Juros, 2);
            response.Investimento = Math.Round(response.Investimento, 2);
        }
    }
}
