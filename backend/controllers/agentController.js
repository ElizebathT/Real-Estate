const Agent = require("../models/agentModel");
const asyncHandler = require("express-async-handler");

const agentController = {
    // // Create Agent
    // createAgent: asyncHandler(async (req, res) => {
    //     const { specializations, experience, licenseNumber, bio} = req.body;
    //     const existingAgent = await Agent.findOne({ licenseNumber });
    //     if (existingAgent) {
    //         throw new Error("Agent with this license already exists");
    //     }
    //     const agent = await Agent.create({
    //         ...req.body,
    //         profileCompleted: !!(specializations && experience && licenseNumber),
    //     });
    //     res.status(201).send(agent);
    // }),

    // Get All Agents
    getAllAgents: asyncHandler(async (req, res) => {
        const agents = await Agent.find().populate("reviews");
        res.status(200).send(agents);
    }),

    // Get Agent by ID
    getAgentById: asyncHandler(async (req, res) => {
        const agent = await Agent.findOne({user:req.user.id}).populate("reviews");
        if (!agent) {
            throw new Error("Agent not found");
        }
        res.status(200).send(agent);
    }),

    // Update Agent
    // updateAgent: asyncHandler(async (req, res) => {
    //     const agent = await Agent.findOne({user:req.user.id});
    //     if (!agent) {
    //         throw new Error("Agent not found");
    //     }

    //     Object.assign(agent, req.body);
    //     agent.profileCompleted = !!(agent.specializations && agent.experience && agent.licenseNumber);

    //     const updatedAgent = await agent.save();
    //     res.status(200).send(updatedAgent);
    // }),

    upsertAgent: asyncHandler(async (req, res) => {
        const { specializations, experience, licenseNumber, bio } = req.body;
    
        let agent = await Agent.findOne({ user: req.user.id });
    
        if (agent) {
            // Update existing agent
            Object.assign(agent, req.body);
        } else {
            // Check if another agent exists with the same licenseNumber
            const existingAgent = await Agent.findOne({ licenseNumber });
            if (existingAgent) {
                throw new Error("Agent with this license already exists");
            }
            // Create new agent
            agent = new Agent({
                ...req.body,
                user: req.user.id,
            });
        }
    
        // Update profile completion status
        agent.profileCompleted = !!(specializations && experience && licenseNumber);
    
        const savedAgent = await agent.save();
        res.status(agent.isNew ? 201 : 200).send(savedAgent);
    }),
    

    // Delete Agent
    deleteAgent: asyncHandler(async (req, res) => {
        const agent = await Agent.findByOne({user:req.user.id});
        if (!agent) {
            res.status(404);
            throw new Error("Agent not found");
        }
        await agent.remove();
        res.status(200).send({ message: "Agent removed" });
    }),
};

module.exports = agentController;
