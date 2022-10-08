export const buildSpinner = () => {
  const spinner = `
      <div class="spinner" style="width:100vw;flex-direction:column;">
          <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
          <h2>Loading...</h2>
      </div>`;
  return spinner;
};
