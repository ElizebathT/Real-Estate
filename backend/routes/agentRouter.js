const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const agentController = require("../controllers/agentController");
const agentRoutes = express.Router();

agentRoutes.delete("/delete",userAuthentication, agentController.deleteAgent);
agentRoutes.get("/viewall", userAuthentication,agentController.getAllAgents);
// agentRoutes.post("/add", userAuthentication,agentController.createAgent);
agentRoutes.get("/search", userAuthentication,agentController.getAgentById);
// agentRoutes.put("/edit", userAuthentication,agentController.updateAgent);
agentRoutes.put("/edit", userAuthentication,agentController.upsertAgent);

module.exports = agentRoutes;