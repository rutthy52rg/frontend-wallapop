export const loginFormTemplate = () => {
  const htmlTemplate = `<form class="d-flex flex-column login-form" >
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1">@</span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        name="username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <span class="input-group-text"
                        ><i class="bi-lock"></i
                      ></span>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        name="password"
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        autocomplete="on"
                      />
                    </div>
                    <div class="input-group mb-3">
                      <button class="btn btn-info" type="submit">Login</button>
                    </div>
                    <div>
                      ¿No eres miembro aún?
                      <a href="http://localhost:8080/signup.html"
                        >Date de alta</a
                      >
                    </div>
                  </form>`;
  return htmlTemplate;
};