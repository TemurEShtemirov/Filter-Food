import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ items }) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {items.map((val) => (
                    <div key={val.id} className="col-md-4 col-sm-6 card my-3 border-0">
                        <div className="card-img-top text-center">
                            <img src={val.image} alt="Image" className="w-75" />
                        </div>
                        <div className="card-body">
                            <div className="card-title fw-bold fs-4">
                                {val.title} --- ${val.price}
                            </div>
                            <div className="card-text">{val.subtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
