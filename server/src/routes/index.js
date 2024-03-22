const { Router } = require("express");

const router = Router();

const driverRoutes = require("./routesDriver")
const teamRoutes = require("./routesTeam")

router.use("/drivers", driverRoutes);
router.use("/teams", teamRoutes);

module.exports = router;
