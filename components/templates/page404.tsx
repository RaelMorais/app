import Image from 'next/image';

export default function Custom404() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen font-sans text-gray-900 m-0 p-0">
      
      <main className="max-w-2xl w-full px-6 text-center">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4">
            
            <Image 
              src="/gifs/original-aac8f7f838812fa53cd92617fad5f892.gif" 
              alt="Under Construction Animation"
              width={800} 
              height={600} 
              className="w-full h-auto block"
              unoptimized 
              priority 
            />

          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-gray-800">
          Nothing's <span className="font-medium text-blue-500">here</span>
        </h1>

        <div className="text-xs text-gray-400 font-medium uppercase tracking-[0.2em] mb-12">
          Let's try again letter! :)
        </div>
      </main>

    </div>
    </>
  );
}