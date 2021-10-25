import { Router } from "express";
import {
  getSportsFacility,
  getSportsmanByTrainer,
  getSportsmenByKindOfSport,
  getSportsmenByKindOfSports,
  getTrainersBySportsman,
} from "../controllers";

const router = Router();

router
  .get("/sports_facility", getSportsFacility)
  .get("/sportsmen_by_kind_of_sport", getSportsmenByKindOfSport)
  .get("/sportsman_by_trainer", getSportsmanByTrainer)
  .get("/sportsman_by_kind_of_sports", getSportsmenByKindOfSports)
  .get("/trainers_by_sportsman", getTrainersBySportsman);

export default router;
