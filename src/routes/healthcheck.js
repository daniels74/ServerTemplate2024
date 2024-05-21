import { Router } from "express";

const router = new Router();

router.get(`/`, (req, res) => {
    res.status(200).json(
        {
            status: "Healthy",
            date: new Date().toISOString(),
            method: req.method,
            service: 'API',
            protocol: req.protocol,
        }
    )
});

router.post('/', (req, res) => {
    const { payload } = req.body;

    res.status(200).json({
        status: "Recieved",
        date: new Date().toISOString(),
        method: req.method,
        service: 'API',
        protocol: req.protocol,
        payload 
    })
});

export default router;