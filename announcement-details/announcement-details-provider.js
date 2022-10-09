import { apiProviders } from "../ApiProviders.js";

export const getAnnouncementId = async (announcementId) => {
  const announcement = await apiProviders.get(
    `${apiProviders.endpoints.announcements}/${announcementId}?_expand=user`
  );

  return announcement;
};

export const removeAnnouncementId = async (announcementId) => {
  await apiProviders.delete(
    `${apiProviders.endpoints.announcements}/${announcementId}`
  );
};
