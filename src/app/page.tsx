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
<div className="hero min-h-screen" style={{backgroundImage: 'url()'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Dolphin Delivery</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    </main>
  );
}
