import { Response, Request, NextFunction } from "express";
import { Op } from "sequelize";
import db from "../db/models";

// Получить перечень спортивных сооружений указанного типа
// в целом или удовлетворяющих заданным характеристикам
// (например, стадионы, вмещающие не менее указанного числа зрителей).
export const getSportsFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { sports_facility_type, characteristic, value } = req.query;
    const sportsFacility = await db.sports_facility.findAll({
      include: [
        {
          model: db.sports_facility_type,
          where: { name: sports_facility_type },
          include: [
            {
              model: db.sports_facility_characteristic,
              where: {
                name: characteristic,
                value,
              },
            },
          ],
        },
      ],
    });
    return res.json({ sportsFacility });
  } catch (err) {
    next(err);
  }
};

// Получить список спортсменов, занимающихся указанным видом спорта
// в целом либо не ниже определенного разряда.
export const getSportsmenByKindOfSport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { kind_of_sport, skill_lvl } = req.query;
    const sportsmen = await db.sportsman.findAll({
      where: { skill_lvl: { [Op.gte]: skill_lvl } },
      include: [{ model: db.kind_of_sport, where: { name: kind_of_sport } }],
    });
    return res.json({ sportsmen });
  } catch (err) {
    next(err);
  }
};