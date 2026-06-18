"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_js_1 = __importDefault(require("./app.js"));
const database_js_1 = __importDefault(require("./config/database.js"));
const PORT = process.env.PORT || 3000;
async function main() {
    try {
        // Verificar conexión a la base de datos
        await database_js_1.default.$connect();
        console.log('Conectado a la base de datos');
        // Iniciar servidor
        app_js_1.default.listen(PORT, '0.0.0.0', () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    }
    catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
}
main();
