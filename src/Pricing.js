import { useEffect, useState } from "react";

export default function Pricing() {
  const [Plans, setPlan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pricing")
      .then((data) => data.json())
      .then((Plan) => setPlan(Plan));
    console.log(Plans);
  }, []);

  return (
    <div className="container p-2 ">
      <header>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal">Choose a plan</h1>
          <p class="fs-5 text-muted">
            Pick one that's right for you and unlock features that help you
            grow.
          </p>
        </div>
      </header>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {Plans.map((Plan) => {
          return (
            <div class="col">
              <div class={Plan.border_style}>
                <div class={Plan.title_style}>
                  <h4 class="my-0 fw-normal">{Plan.plan}</h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    ${Plan.monthly_price}<small class="text-muted fw-light">/mo</small>
                  </h1>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item fw-bold">Features</li>

                    {
                      Plan.features.map((feature)=>{
                        return (
                          <li class="list-group-item">{feature}</li>
                        );
                      })
                    }
                  </ul>
                  <button
                    type="button"
                    class={Plan.button_style}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
