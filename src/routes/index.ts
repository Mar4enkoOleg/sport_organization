import { Router } from "express";
import {
  getSportsFacility,
  getSportsmanByTrainer,
  getSportsmenByKindOfSport,
  getSportsmenByKindOfSports,
} from "../controllers";

const router = Router();

router
  .get("/sports_facility", getSportsFacility)
  .get("/sportsmen_by_kind_of_sport", getSportsmenByKindOfSport)
  .get("/sportsman_by_trainer", getSportsmanByTrainer)
  .get("/sportsman_by_kind_of_sports", getSportsmenByKindOfSports);

export default router;
