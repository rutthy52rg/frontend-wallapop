export const buildNotication = (message) => {
  const htmlTemplate = `<p>${message}</p>
  <button class="notification-button-close">cerrar</button>
`;
  return htmlTemplate;
};
