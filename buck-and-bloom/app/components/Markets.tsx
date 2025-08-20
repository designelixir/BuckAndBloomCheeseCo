
import Link from "next/link";
import "./components.css";
import Image from "next/image";

export default function Markets() {

  return (
    <div className="basic-padding "  style={{marginTop: '100px'}}>
        <div className="flex-center-center">
            <Image src="flora-2.svg" alt="floral detail" height={25} width={25} style={{marginRight: '25px'}}></Image>
            <h1 className="centered-text about-title">Markets</h1>
            <Image src="flora-3.svg" alt="floral detail" height={25} width={25} style={{marginLeft: '25px'}}></Image>
        </div>
        
        <div className="flex-center-center flex-wrap">
            <div className="event flex-center-center basic-bg flex-column basic-padding">
                <h2 className="centered-text">Buena Vista Farmers Market</h2>
                <p className="bold-text red-text">Saturdays</p>
                <p className="centered-text">9am - 1pm till October 4th</p>
                <Link href="https://www.foodshedalliance.com/discover-the-market" target="_blank">
                    <button>Details</button>
                </Link>
            </div>
            <div className="event flex-center-center basic-bg flex-column basic-padding">
                <h2 className="centered-text">Salida Farmers Market</h2>
                <p className="bold-text red-text">Saturdays</p>
                <p className="centered-text">8am - 12pm<br></br>
                    Fall hours - beginning Oct. 4th, 9am - 1pm
                </p>
                <Link href="https://www.foodshedalliance.com/discover-the-market" target="_blank">
                    <button>Details</button>
                </Link>
            </div>
            <div className="event flex-center-center basic-bg flex-column basic-padding">
                <h2 className="centered-text">Vail Farmers Market</h2>
                <h3 className="bold-text red-text">Sundays</h3>
                <p className="centered-text">8am - 12pm<br></br>
                    Fall hours - beginning Oct. 4th, 9am - 1pm
                </p>
                <Link href="https://www.vailfarmersmarket.com/" target="_blank">
                    <button>Details</button>
                </Link>
            </div>
        </div>
        <div className="flex-center-center flex-column">
        <h2>For more markets and to keep up with the farm, follow us on Instagram!</h2>
        <Link href="https://www.instagram.com/buckandbloomcheese/" target="_blank" className="no-link-styling" style={{marginRight:'15px'}}>
            <button> @buckandbloomcheese</button>
            </Link>
        </div>
    </div>
    
    
    
  );
}
