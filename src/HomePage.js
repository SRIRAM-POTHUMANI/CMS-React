import img1 from './images/about.png';
import img2 from './images/cozy.png';
import img3 from './images/future.png';
import img4 from './images/studyinusa_template.png';
import img5 from './images/successtemplate.png';
import img6 from './images/transportation.png';
export default function HomePage(){
    return (
        <>  
        <main  className="container p-2">

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="text-decoration-underline fw-bolder">Create a website you're proud of</h1>
      <p class="lead text-muted">Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want. </p>
      <p>
        <a href="#" class="btn btn-primary my-2">Main call to action</a>
        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
      </p>
    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      {/* images */}

      <ImageCard imageName={img1} />
      <ImageCard imageName={img2} />
      <ImageCard imageName={img3} />
      <ImageCard imageName={img4} />
      <ImageCard imageName={img5} />
      <ImageCard imageName={img6} />


    </div>
  </div>
</div>

</main>
        </>
    );
}

function ImageCard(props) {
  return <div class="col">
    <div class="card" style={{ width: "25rem" }}>
      <img src={props.imageName} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>;
}
