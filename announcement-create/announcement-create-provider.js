//importamos fichero de endpoints y métodos api
import { apiProviders } from "../ApiProviders.js";

export const createAnnouncement = (annoucement) => {
  console.log(annoucement)
  const content = annoucement
  apiProviders.post(apiProviders.endpoints.announcements, content);
};
