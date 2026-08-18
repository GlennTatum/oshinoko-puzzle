import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(/bg-char-2.png)] bg-cover bg-center bg-no-repeat">
        <div>
          <Image 
            src="/ic-green.svg" 
            alt="Green" 
            width={96}
            height={96}
            className="absolute inset-x-8/11 inset-y-1/8 rotate-32 animate-float animate-iteration-count-infinite animate-duration-3000"
          />
        </div>
        <div>
          <Image 
            src="/ic-red.svg" 
            alt="Red" 
            width={120}
            height={120}
            className="absolute inset-x-1/8 inset-y-1/8 rotate-345 animate-float animate-iteration-count-infinite animate-duration-3000"
          />
        </div>
        <div>
          <Image 
            src="/ic-purple.svg" 
            alt="Purple" 
            width={96}
            height={96}
            className="absolute inset-x-1/8 inset-y-6/8 rotate-355 animate-float animate-iteration-count-infinite animate-duration-3000"
          />
        </div>
        <div>
          <Image 
            src="/ic-yellow.svg" 
            alt="Yellow" 
            width={160}
            height={160}
            className="absolute inset-x-2/9 inset-y-6/8 rotate-24 animate-float animate-iteration-count-infinite animate-duration-3000"
          />
        </div>
        <div>
          <Image 
            src="/ic-blue.svg" 
            alt="Ai Hoshino Button" 
            width={96}
            height={96}
            className="z-4 absolute inset-x-9/15 inset-y-10/12 rotate-16 animate-float animate-iteration-count-infinite animate-duration-3000"
          />
        </div>
        <div className="flex animate-blurred-fade-in p-4">
          <div className="grow-1 pl-8 animate-bounce-fade-in">
            <div className="flex items-center h-screen">
              <div className="flex flex-col pb-24">
                <Image 
                  src="/btn-1.png" 
                  alt="Ai Hoshino Button" 
                  width={96}
                  height={96}
                  className="pb-4 hover:animate-pulsing"
                />
                <Image 
                  src="/btn-2-v.png" 
                  alt="Character Select" 
                  width={96}
                  height={96}
                  className="pb-4 hover:animate-pulsing"
                />
                <Image 
                  src="/btn-3.png" 
                  alt="Ruby Hoshino Button" 
                  width={96}
                  height={96}
                  className="pb-4 hover:animate-pulsing"
                />
                <Image 
                  src="/btn-4.png" 
                  alt="Kana Arima Button" 
                  width={96}
                  height={96}
                  className="pb-4 hover:animate-pulsing"
                />
                <Image 
                  src="/btn-5.png" 
                  alt="Akane Kurokawa Button" 
                  width={96}
                  height={96}
                  className="pb-4 hover:animate-pulsing"
                />
                <Image 
                  src="/btn-6.png" 
                  alt="MEM Cho Button" 
                  width={96}
                  height={96}
                  className="pb-4 hover:animate-pulsing"
                />
              </div>

            </div>
          </div>
          <div className="flex items-center grow-1 animate-slide-up-fade h-screen">
            <div className="h-3/8">
                <div className="pb-4 text-6xl text-sky-400 font-bold">
                  <p>Aqua</p>
                </div>
                <div className="pb-2 text-4xl text-neutral-950 font-bold">
                  <p>CV. Takeo Otsuka</p>
                </div>
                <div className="text-lg text-neutral-950 font-semibold">
                  <p>A handsome actor with a cool, composed charm.</p>
                </div>
                <div className="text-2xl text-sky-500 font-bold">
                  <p>⌈Since I'm here,</p>
                  <div>
                    <p>maybe I'll raise some hell before I go.⌋</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="grow-12 flex animate-slide-in-right animate-slide-distance-[100%] h-screen">
              <div className="z-1 flex-4 relative">
                <Image 
                  src="/char-2-shadow.png" 
                  alt="Aqua Hoshino Image" 
                  fill 
                  style={{ objectFit: 'contain' }}
                />
              </div>
             <div className="z-0 flex-6 -translate-x-24 relative">
                <Image 
                  src="/character-text-2-en.png" 
                  alt="Aqua Hoshino Text" 
                  fill 
                  style={{ objectFit: 'contain' }}
                />  
              </div>
          </div>
        </div>
      </div>
  );
}
