import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors'

import dotenv from 'dotenv'
import helmet from 'helmet';
import morgan from 'morgan'
import clientRoutes from "./server/client.js"
import generalRoutes from "./server/general.js"
import managementRoutes from "./server/management.js"
import salesRoutes from "./server/sales.js"

// CONFIG
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

// routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes)