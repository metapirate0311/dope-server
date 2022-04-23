/**
 * IMPORTANT: 
 * ---------
 * Do not manually edit this file if you'd like to use Colyseus Arena
 * 
 * If you're self-hosting (without Arena), you can manually instantiate a
 * Colyseus Server as documented here: 👉 https://docs.colyseus.io/server/api/#constructor-options 
 */
import { listen } from "@colyseus/arena";

// Import arena config
import arenaConfig from "./arena.config";

import path from "path";
import { config } from "dotenv";

const port = Number(process.env.PORT || 3002);

// config({ path: path.join(__dirname, "../dra.env") });

// Create and listen on 2567 (or PORT environment variable.)
listen(arenaConfig, port);