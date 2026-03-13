import express from 'express'
import cors from 'cors'
import movieRoutes from './modules/movie/movie.routes.js'
import paymentRoutes from "./modules/payment/payment.routes.js";
import theatreRoutes from "./modules/theatre/theatre.routes.js";
import showRoutes from "./modules/show/show.routes.js";
import seatRoutes from "./modules/seat/seat.routes.js";
import bookingRoutes from "./modules/booking/booking.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import permissionRoutes from "./modules/permission/permission.routes.js";
import roleRoutes from "./modules/role/role.routes.js";
import employeeRoutes from "./modules/employee/employee.routes.js";



const app = express();

app.use(cors());
app.use(express.json());





app.use("/api/auth", authRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", theatreRoutes);
app.use("/api/shows", showRoutes);
app.use("/api/seats", seatRoutes);
app.use("/api/bookings", bookingRoutes);

app.use("/api/permissions", permissionRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/employees", employeeRoutes);




app.get("/", (req, res) => {
  res.send("Welcome to the Movie API");
});

export default app;