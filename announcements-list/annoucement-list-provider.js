
//importamos fichero de endpoints y métodos api
import { apiProviders } from "../ApiProviders.js";

//cogemos los anuncios ( los errores se gestionan en el controlador)
export const getAnnouncemets = async () => {
    const  announcements = await apiProviders.get(apiProviders.endpoints.announcements);
    return announcements; 
};