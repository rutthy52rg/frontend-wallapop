export async function getAnnouncemets() {
  const announcementUrl = "http://localhost:8000/api/announcements";
  // const tweetsUrl = 'https://images.pexels.com/photos/13252401/pexels-photo-13252401.jpeg';

  let response;

  try {
    response = await fetch(announcementUrl);
  } catch (error) {
    throw new Error("El dominio no existe");
  }

  if (!response.ok) {
    throw new Error("Anuncios no encontrados");
  }

  try {
    const announcements = await response.json();
    return announcements;
  } catch (error) {
    throw new Error("La respuesta no es válida");
  }
}
