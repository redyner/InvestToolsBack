using CalculadoraJuros.Executores.CalcularExecutor;

namespace CalculadoraJuros.Interfaces
{
    public interface ICalcularExecutor
    {
        Task<CalcularExecutorResponse> Calcular(CalcularExecutorRequest request);
    }
}
