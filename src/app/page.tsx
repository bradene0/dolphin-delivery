import Image from "next/image";
import "daisyui/dist/full.css";
export default function Home() {
  return (
    <main>
    <div className="navbar bg-primary">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">Dolphin</a>
  </div>
  <div className="navbar-end">
    <a className="btn">Contact Us</a>
  </div>
</div>
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1491986542380-fdf7aebad979?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Dolphin Delivery</h1>
      <p className="mb-5">We provide swift and efficient delivery of dolphins from zoos and aquariums TO the ocean. Not the other way around.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


    </main>
  );
}
