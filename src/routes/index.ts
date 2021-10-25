import { Router } from "express";
import { getSportsFacility, getSportsmenByKindOfSport } from "../controllers";

const router = Router();

router
  .get("/sports_facility", getSportsFacility)
  .get("/sportsmen", getSportsmenByKindOfSport);

export default router;
