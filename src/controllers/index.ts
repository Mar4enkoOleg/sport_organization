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

// Получить список тренеров указанного спортсмена.
export const getTrainersBySportsman = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { sportsman } = req.query;
    const trainers = await db.trainer.findAll({
      attributes: ["full_name"],
      include: [
        {
          model: db.sportsman,
          where: { full_name: sportsman },
          attributes: ["full_name"],
        },
      ],
    });
    return res.json({ trainers });
  } catch (err) {
    return next(err);
  }
};

// Получить перечень соревнований,
// проведенных в течение заданного периода времени
// в целом либо указанным организатором.

export const getTournamentsByOrganizator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { organizator } = req.query;
    const tournaments = await db.tournament.findAll({
      include: [{ model: db.organizator, where: { name: organizator } }],
    });

    return res.json({ tournaments });
  } catch (err) {
    return next(err);
  }
};

// Получить список призеров указанного соревнования.
export const getPrizzersByTournament = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tournament } = req.query;
    const prizzers = await db.tournament.findAll({
      include: [
        {
          model: db.rewarding,
          include: [{ model: db.reward, include: [{ model: db.sportsman }] }],
        },
      ],
      where: { name: tournament },
    });
    return res.json({ prizzers });
  } catch (err) {
    return next(err);
  }
};

// Получить перечень соревнований, проведенных в указанном спортивном
// сооружении в целом либо по определенному виду спорта.
export const getTournamentsBySportFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { sports_facility, kind_of_sport } = req.query;
    const tournaments = await db.tournament.findAll({
      include: [
        {
          model: db.sports_facility,
          where: { name: sports_facility },
          include: [
            {
              model: db.kind_of_sport,
              where: { name: kind_of_sport },
            },
          ],
        },
      ],
    });
    return res.json({ tournaments });
  } catch (err) {
    return next(err);
  }
};

// Получить перечень спортивных клубов и число спортсменов этих клубов,
// участвовавших в спортивных соревнованиях в течение заданного интервала времени.

export const getSportClubsAndSportsmen = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sportClubs = await db.sport_club.findAll({
      include: [
        {
          model: db.sportsman,
        },
      ],
    });
    return res.json({ sportClubs });
  } catch (err) {
    return next(err);
  }
};

// Получить список тренеров по определенному виду спорта.
export const getTrainersByKindOfSport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { kind_of_sport } = req.query;
    const trainers = await db.trainer.findAll({
      include: [{ model: db.kind_of_sport, where: { name: kind_of_sport } }],
    });
    return res.json({ trainers });
  } catch (err) {
    return next(err);
  }
};

//Получить список организаторов соревнований
// и число проведенных ими соревнований в течение определенного периода времени.
export const getOrganizatorsWithTournaments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tournaments = await db.tournament.findAll({
      attributes: ["name"],
    });
    const arr: any[] = [];
    tournaments.forEach((t: any) => {
      arr.push(t.dataValues.name);
    });

    const organizators = await db.organizator.findAndCountAll({
      include: [
        {
          model: db.tournament,
          where: {
            name: { [Op.in]: arr },
          },
        },
      ],
    });
    return res.json({ organizators });
  } catch (err) {
    return next(err);
  }
};

// Получить перечень спортивных сооружений и даты проведения
// на них соревнований в течение определенного периода времени.
export const getSportFacilities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sportsFacilities = await db.sports_facility.findAll({
      include: [{ model: db.tournament, attributes: ["name", "created_at"] }],
    });
    return res.json({ sportsFacilities });
  } catch (err) {
    return next(err);
  }
};
