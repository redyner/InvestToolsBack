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
                Total = request.Inicial,
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
            CalculaTaxa(request.Juros);

            for (int i = 1; i <= request.Periodo.Valor; i++)
            {
                var aporte = request.Aportes.Find(a => a.Mes == mesAtual || a.Mes == 0);
                if (aporte != null)
                {
                    response.Total += aporte.Valor;
                    response.Investimento += aporte.Valor;
                }

                response.Juros += response.Total * request.Juros.Valor;

                response.Total *= 1 + request.Juros.Valor;

                if (mesAtual == 12)
                    mesAtual = 0;

                mesAtual++;
            }
        }

        private void CalculaTaxa(Juros juros)
        {
            if (juros.TipoPeriodo == TipoPeriodo.Anual)
                juros.Valor = juros.Valor / 12 / 100;
            else
                juros.Valor /= 100;
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
