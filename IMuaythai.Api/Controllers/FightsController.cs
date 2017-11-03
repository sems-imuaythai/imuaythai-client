using System;
using System.Linq;
using System.Threading.Tasks;
using IMuaythai.Fights;
using IMuaythai.Models.Fights;
using Microsoft.AspNetCore.Mvc;

namespace IMuaythai.Api.Controllers
{
   // [Authorize]
    [Route("api/[controller]")]
    public class FightsController : Controller
    {
        private readonly IFightsService _fightsService;
        private readonly IFightDrawsService _drawsService;

        public FightsController(IFightsService fightsService, IFightDrawsService drawsService)
        {
            _fightsService = fightsService;
            _drawsService = drawsService;
        }

        [HttpGet]
        [Route("Get")]
        public async Task<IActionResult> GetContestFights([FromQuery] int contestId, [FromQuery] int categoryId)
        {
            try
            {
                var fightsEnities = categoryId == 0 ? await _fightsService.GetFights(contestId)
                    : await _fightsService.GetFights(contestId, categoryId);

                var fights = fightsEnities.OrderBy(f => f.StartDate).Select(fight => (FightModel)fight).ToList();

                return Ok(fights);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Build")]
        public async Task<IActionResult> BuildFights([FromQuery] int contestId, [FromQuery] int categoryId)
        {
            try
            {
                var fightsEnities = await _fightsService.BuildFights(contestId, categoryId);
                await _fightsService.Save(fightsEnities);
                var fights = fightsEnities.Select(fight => (FightModel)fight).ToList();

                return Ok(fights);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("movefighter")]
        public async Task<IActionResult> MoveFighter([FromBody] FighterMoving fighterMoving)
        {
            try
            {
                var changedFights = await _fightsService.MoveFighter(fighterMoving);
                var fights = changedFights.Select(f => (FightModel)f).ToList();
                return Ok(fights);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("movefight")]
        public async Task<IActionResult> MoveFighter([FromBody] FightMoving fightMoving)
        {
            try
            {
                var changedFights = await _fightsService.MoveFight(fightMoving);
                var fights = changedFights.Select(f => (FightModel)f).ToList();
                return Ok(fights);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Draws")]
        public async Task<IActionResult> GetFightsDraws([FromQuery] int contestId, [FromQuery] int categoryId)
        {
            try
            {
                string fightsDrawsJson = await _drawsService.GetDraws(contestId, categoryId);
                return Ok(fightsDrawsJson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Draws/Generate")]
        public async Task<IActionResult> GenerateFightsDraws([FromQuery] int contestId, [FromQuery] int categoryId)
        {
            try
            {
                string fightsDrawsJson = await _drawsService.GenerateFightsDraws(contestId, categoryId);
                return Ok(fightsDrawsJson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Draws/Regenerate")]
        public async Task<IActionResult> RegenerateFightsDraws([FromQuery] int contestId, [FromQuery] int categoryId)
        {
            try
            {
                string fightsDrawsJson = await _drawsService.RegenerateDraws(contestId, categoryId);
                return Ok(fightsDrawsJson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Draws/Tossup")]
        public async Task<IActionResult> TossupFightsDraws([FromQuery] int contestId, [FromQuery] int categoryId)
        {
            try
            {
                string fightsDrawsJson = await _drawsService.TossupFightsDraws(contestId, categoryId);

                return Ok(fightsDrawsJson);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Schedule")]
        public async Task<IActionResult> ScheduleFights([FromQuery] int contestId)
        {
            try
            {
                var fightsEntities = await _fightsService.ScheduleFights(contestId);
                await _fightsService.Save(fightsEntities);

                var fights = fightsEntities.Select(fight => (FightModel)fight).ToList();
                return Ok(fights);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("Judges/Tossup")]
        public async Task<IActionResult> TossupJudges([FromQuery] int contestId)
        {
            try
            {
                await _fightsService.ClearContestJudgeMappings(contestId);
                var fightsEntities = await _fightsService.TossupJudges(contestId);
                await _fightsService.Save(fightsEntities);

                var fights = fightsEntities.Select(fight => (FightModel)fight).ToList();
                return Ok(fights);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetFight([FromRoute] int id)
        {
            try
            {
                var fightEnity = await _fightsService.GetFight(id);

                return Ok((FightModel)fightEnity);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}