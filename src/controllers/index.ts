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
    return next(err);
  }
};

// Получить список спортсменов, тренирующихся у
// некого тренера в целом либо не ниже определенного разряда.
export const getSportsmanByTrainer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { skill_lvl, trainer } = req.query;
    const sportsmen = await db.sportsman.findAll({
      where: { skill_lvl: { [Op.gte]: skill_lvl } },
      include: [{ model: db.trainer, where: { full_name: trainer } }],
    });
    return res.json({ sportsmen });
  } catch (err) {
    return next(err);
  }
};

// Получить список спортсменов, занимающихся
// более чем одним видом спорта с указанием этих видов спорта.
export const getSportsmenByKindOfSports = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { kind_of_sports } = req.query;

    const sportsmen = await db.sportsman.findAll({
      include: [
        {
          model: db.kind_of_sport,
          where: {
            name: {
              [Op.in]: kind_of_sports!,
            },
          },
        },
      ],
    });
    return res.json({ sportsmen });
  } catch (err) {
    return next(err);
  }
};
