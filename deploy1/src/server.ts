require("dotenv").config();

import { createApp } from './app';
import { config } from './config/env';
import { logger } from './utils/logger';

console.log("PORT =", process.env.PORT);
const app = createApp();

app.listen(config.port, '0.0.0.0', () => {
    logger.info(` :) Server is running on port ${config.port}`);
    logger.info(` ;) Profile endpoint available at /me`);
});