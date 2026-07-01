import Image from "next/image";
import tshirt from '../../assets/images/tshirt.jpeg'

const AboutPage = () => {
    return (
        <div>
            <h2>This is About page</h2>
            <Image width="500" height="300" src="/photo1.png" alt="text photo"></Image>
            <Image width="500" height="300" src={tshirt} alt="T-Shirt image"></Image>
            <Image width="500" height="300" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="silence river view"></Image>
            <Image width="500" height="300" src="https://i.ibb.co.com/JR1JcDqn/pexels-pixabay-531880.jpg" alt="my soul"></Image>
        </div>
    );
};

export default AboutPage