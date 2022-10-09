export const notificationStatusTemplateHTML = (message) => {
  const htmlTemplate = `
  <div class="alert alert-info alert-dismissible fade show" role="alert">
      <strong><p>${message}</p></strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
`;
  return htmlTemplate;
};

export const notificationErrorTemplateHTML = (message) => {
  const htmlTemplate = `
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Error</h5>
        </div>
        <div class="modal-body">
          <p>${message}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary close-button"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>`;

  return htmlTemplate;
};
