import { Router } from "express";
import {
  getPrizzersByTournament,
  getSportsFacility,
  getSportsmanByTrainer,
  getSportsmenByKindOfSport,
  getSportsmenByKindOfSports,
  getTournamentsByOrganizator,
  getTrainersBySportsman,
} from "../controllers";

const router = Router();

router
  .get("/sports_facility", getSportsFacility)
  .get("/sportsmen_by_kind_of_sport", getSportsmenByKindOfSport)
  .get("/sportsman_by_trainer", getSportsmanByTrainer)
  .get("/sportsman_by_kind_of_sports", getSportsmenByKindOfSports)
  .get("/trainers_by_sportsman", getTrainersBySportsman)
  .get("/tournaments_by_organizator", getTournamentsByOrganizator)
  .get("/prizzers_by_tournament", getPrizzersByTournament);

export default router;
