import { useState } from "react";
import { useHistory } from "react-router";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [userName, setuserName] = useState("");
  var DATA = [
    {
      email: email,
      password: password,
      name: name,
      username: userName,
    },
  ];
  const addUser = () => {
    console.log(DATA);
    fetch("https://cms-node-b262.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DATA),
    });
    RouteChange();
  };

  const history = useHistory();

  const RouteChange = () => {
    let path = `/Login`;
    history.push(path);
  };
  return (
    <>
      <section class="p-5" style={{ backgroundcolor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <div class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              onChange={(event) => setname(event.target.value)}
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              onChange={(event) =>
                                setuserName(event.target.value)
                              }
                            />
                            <label class="form-label" for="form3Example1c">
                              Your User Name
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              onChange={(event) => setemail(event.target.value)}
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              onChange={(event) =>
                                setpassword(event.target.value)
                              }
                            />
                            <label class="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            onClick={addUser}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
                        class="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
