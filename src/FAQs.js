import { useEffect, useState } from "react";

export default function FAQs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/faq")
      .then((data) => data.json())
      .then((Faq) => setFaqs(Faq));
      console.log(faqs);
  }, []);

  return (
    <>
      <div className="container p-2">
        <main>
          <h1>Get started with Bootstrap</h1>
          <p
            class="fs-5 col-md-8"
            style={{ display: "contents", textAlign: "center" }}
          >
            Quickly and easily get started with Bootstrap's compiled,
            production-ready files with this barebones example featuring some
            basic HTML and helpful links. Download all our examples to get
            started.
          </p>

        
          <hr />
        </main>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {faqs.map((faq)=> {
            return (
             
              <div class="card col-3 m-5" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">{faq.name}</h5>
                <ul class="list-group list-group-flush">
                  {faq.faq.map((feature)=>{
                    return (
                      <li class="list-group-item">{feature}</li>
                    )
                  })}

                </ul>
                {/* <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a> */}
              </div>
              </div>

            );
         
          })}
                        </div>
              </div>
        
      </div>
    </>
  );
}
