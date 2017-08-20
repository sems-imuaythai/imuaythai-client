﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MuaythaiSportManagementSystemApi.Models
{
    public class FightPoint
    {
        [Key]
    
        public int Id { get; set; }

        public int RoundId{ get; set; }

        public string FighterId { get; set; }
        public string JudgeId { get; set; }
        public int Points { get; set; }
        public int FightId { get; set; }
        public int Cautions { get; set; }
      
        public int Warnings { get; set; }

        public int KnockDown { get; set; }

        public int J { get; set; }
        public int X { get; set; }
        public string Injury { get; set; }
        public DateTime? InjuryTime { get; set; }
        public bool Accepted { get; set; }

        public virtual Fight Fight { get; set; }
        public virtual ApplicationUser Judge { get; set; }
        public virtual ApplicationUser Fighter { get; set; }
    }
}
