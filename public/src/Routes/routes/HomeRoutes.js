import express from "express";
const homeRoutes = express.Router();
homeRoutes.get("", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.json({ home: "home page response " });
});
export default homeRoutes;
