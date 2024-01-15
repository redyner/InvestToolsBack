using CalculadoraJuros.Enums;
using CalculadoraJuros.Executores.CalcularExecutor;
using CalculadoraJurosTeste.Builder;

namespace CalculadoraJurosTeste
{
    public class Tests
    {

        [Fact]
        public void TesteJurosEPeriodoAnuaisSucesso()
        {
            var request = new CalcularExecutorRequestBuilder().Build();

            var response = new CalcularExecutorResponse { Total = 25607.81M, Investimento = 13000M, Juros = 12507.81M };

            var executor = new CalcularExecutor();

            var result = executor.Calcular(request).Result;

            Assert.Equal(response.Total, result.Total);
            Assert.Equal(response.Investimento, result.Investimento);
            Assert.Equal(response.Juros, result.Juros);
        }

        [Fact]
        public void TesteJurosEPeriodoMensaisSucesso()
        {
            var request = new CalcularExecutorRequestBuilder().Build();

            request.Juros.TipoPeriodo = TipoPeriodo.Mensal;

            request.Periodo.TipoPeriodo = TipoPeriodo.Mensal;

            var response = new CalcularExecutorResponse { Total = 2586.63M, Investimento = 1100M, Juros = 1386.63M };

            var executor = new CalcularExecutor();

            var result = executor.Calcular(request).Result;

            Assert.Equal(response.Total, result.Total);
            Assert.Equal(response.Investimento, result.Investimento);
            Assert.Equal(response.Juros, result.Juros);
        }
    }
}