using CalculadoraJuros.Executores.CalcularExecutor;
using CalculadoraJuros.Interfaces;

namespace CalculadoraJuros.Configs
{
    public static class ScopedConfig
    {
        public static void ConfigureScoped(this IServiceCollection services)
        {
            services.AddScoped<ICalcularExecutor, CalcularExecutor>();
        }
    }
}
