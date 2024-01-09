using CalculadoraJuros.Executores.CalcularExecutor;
using CalculadoraJuros.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CalculadoraJuros.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class InvestimentoController : ControllerBase
    {
        private readonly ILogger<InvestimentoController> _logger;
        private readonly ICalcularExecutor _calcularExecutor;

        public InvestimentoController(ILogger<InvestimentoController> logger, ICalcularExecutor calcularExecutor)
        {
            _logger = logger;
            _calcularExecutor = calcularExecutor;
        }

        [HttpPost]
        public async Task<CalcularExecutorResponse> GetAsync([FromBody] CalcularExecutorRequest request)
        {
            _logger.LogInformation($"[Calcular] - {request}");
            return await _calcularExecutor.Calcular(request);
        }
    }
}
