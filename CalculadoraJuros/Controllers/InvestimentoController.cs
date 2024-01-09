using CalculadoraJuros.Executores.CalcularExecutor;
using Microsoft.AspNetCore.Mvc;

namespace CalculadoraJuros.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class InvestimentoController : ControllerBase
    {
        private readonly ILogger<InvestimentoController> _logger;

        public InvestimentoController(ILogger<InvestimentoController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public CalcularExecutorResponse Get([FromBody] CalcularExecutorRequest request)
        {
            return new CalcularExecutorResponse();
        }
    }
}
