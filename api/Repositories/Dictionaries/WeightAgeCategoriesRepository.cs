﻿using System;
using System.Collections.Generic;
using System.Linq;
using MuaythaiSportManagementSystemApi.Data;
using MuaythaiSportManagementSystemApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace MuaythaiSportManagementSystemApi.Repositories
{
    public class WeightAgeCategoriesRepository : IWeightAgeCategoriesRepository
    {
        private readonly ApplicationDbContext _context;

        public WeightAgeCategoriesRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Task<WeightAgeCategory> Get(int id)
        {
            return _context.WeightAgeCategories.FirstOrDefaultAsync(c => c.Id == id);
        }

        public Task<List<WeightAgeCategory>> GetAll()
        {
            return _context.WeightAgeCategories.ToListAsync();
        }

        public Task<List<WeightAgeCategory>> Find(Func<WeightAgeCategory, bool> predicate)
        {
            return _context.WeightAgeCategories.Where(predicate).AsQueryable().ToListAsync();
        }

        public Task Save(WeightAgeCategory category)
        {
            if (category.Id == 0)
            {
                _context.WeightAgeCategories.Add(category);
            }

            return _context.SaveChangesAsync();
        }

        public Task Remove(int id)
        {
            var category = _context.WeightAgeCategories.FirstOrDefault(i => i.Id == id);
            _context.WeightAgeCategories.Remove(category);
            return _context.SaveChangesAsync();
        }
    }
}