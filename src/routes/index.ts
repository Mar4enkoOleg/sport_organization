import { Router } from "express";
import {
  getSportsFacility,
  getSportsmanByTrainer,
  getSportsmenByKindOfSport,
} from "../controllers";

const router = Router();

router
  .get("/sports_facility", getSportsFacility)
  .get("/sportsmen_by_kind_of_sport", getSportsmenByKindOfSport)
  .get("/sportsman_by_trainer", getSportsmanByTrainer);

export default router;
