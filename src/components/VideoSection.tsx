"use client";

export default function VideoSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8" id="video">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Descubre cómo funciona nuestro sistema
        </h2>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </section>
  );
} 