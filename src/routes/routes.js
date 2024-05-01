import {Router} from "express";

import doctorRoutes from './doctor.routes.js';
import patienRoutes from './patient.routes.js'
import publicRoutes from './public.routes.js';
import typeRoutes from './type.routes.js';
import userRoutes from './user.routes.js';
import clinicHistoryRoutes from './clinicHistory.routes.js';
import appointmentRoutes from './appointment.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();
const apiRouter = Router();

router.use("/v1/api", publicRoutes);

apiRouter.use("/doctor", doctorRoutes);
apiRouter.use("/patient", patienRoutes);
apiRouter.use("/type", typeRoutes);
apiRouter.use("/user", userRoutes)
apiRouter.use("/clinicHistory", clinicHistoryRoutes)
apiRouter.use("/appointment", appointmentRoutes);
apiRouter.use("/auth", authRoutes);


router.use("/v1/api", apiRouter);

export default router;
