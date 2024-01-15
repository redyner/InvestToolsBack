using CalculadoraJuros.Enums;
using CalculadoraJuros.Executores.CalcularExecutor;
using CalculadoraJurosTeste.Builder;

namespace CalculadoraJurosTeste
{
    public class Tests
    {
        

        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void TesteJurosEPeriodoAnuaisSucesso()
        {
            var request = new CalcularExecutorRequestBuilder().Build();

            var response = new CalcularExecutorResponse { Total = 25607.81M, Investimento = 13000M, Juros = 12507.81M };

            var executor = new CalcularExecutor();

            var result = executor.Calcular(request).Result;

            Assert.AreEqual(response.Total, result.Total);
            Assert.AreEqual(response.Investimento, result.Investimento);
            Assert.AreEqual(response.Juros, result.Juros);
        }

        [Test]
        public void TesteJurosEPeriodoMensaisSucesso()
        {
            var request = new CalcularExecutorRequestBuilder().Build();

            request.Juros.TipoPeriodo = TipoPeriodo.Mensal;

            request.Periodo.TipoPeriodo = TipoPeriodo.Mensal;

            var response = new CalcularExecutorResponse { Total = 2586.63M, Investimento = 1100M, Juros = 1386.63M };

            var executor = new CalcularExecutor();

            var result = executor.Calcular(request).Result;

            Assert.AreEqual(response.Total, result.Total);
            Assert.AreEqual(response.Investimento, result.Investimento);
            Assert.AreEqual(response.Juros, result.Juros);
        }
    }
}