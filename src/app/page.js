import Image from "next/image";
import Nav from "../../components/nav";
import Slider from "../../components/Slider";

export default function Home() {
  return (
    <main className="">
       <Nav/>
       <div>
        <img  src="https://res.cloudinary.com/dusavcufz/image/upload/v1705665630/vtrwzdno3fena0kjypej.png" alt="home" />
       </div>
       <div>
        <img  src="https://res.cloudinary.com/dusavcufz/image/upload/v1705736371/nlso9bi2q4nv0es6jh5w.png" alt="home1" />
       </div>
       <div>
        <img  src="https://res.cloudinary.com/dusavcufz/image/upload/v1705736535/qfrga13dwlygwwsozwux.png" alt="home1" />
       </div>
       
       <div>
        <img  src="https://res.cloudinary.com/dusavcufz/image/upload/v1705736881/k5n09uqllw6gnpofc2lj.png" alt="home1" />
       </div>
       <div>
        <img  src="https://res.cloudinary.com/dusavcufz/image/upload/v1705737968/lgxcpyjz8pqfkabvtg00.png" alt="home1" />
       </div>
       <Slider />
    </main>
  )
}
