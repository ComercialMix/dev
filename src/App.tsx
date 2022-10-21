import './styles/main.css';
import './styles/styles.css';

import avatar from './assets/image-homepage-profile.png'
import headerImage from './assets/header-image.svg'

function App() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <header className="max-w-[1200px] w-full">

        <nav className="w-full h-12 bg-white">
        </nav>

        <div className="flex flex-row justify-around items-center my-20">

          <h1 className="text-5xl leading-none text-white font-normal">
            Meu nome é<br/>
            <span className="font-black text-6xl text-transparent bg-tc-orange-gradient bg-clip-text">Thiago Côrtes</span><br/>
            e eu tenho a<br/>
            <span className="font-black text-6xl text-transparent bg-tc-orange-gradient bg-clip-text">Solução Digital<br/></span>
            que o seu<br/>
            negócio precisa!
          </h1>

          <img src={headerImage} alt="" />

        </div>


      </header>
      <div className="w-full bg-tc-orange-gradient py-4">
        <div className="w-full bg-tc-orange-gradient2 py-4">
          <div className="w-full bg-slate-100 py-4 flex justify-around">

            <div className="max-w-[1200px] w-full flex flex-row justify-around items-center">

                <img src={avatar} className="w-80" alt="" />
                
                <div className="w-1/3">
                  <h2 className="text-2xl font-bold">Quem sou eu?</h2>

                  <p className="text-lg leading-none text-black font-normal">
                    Sou designer, arte-finalista e desenvolvedor front-end com mais de 4 anos 
                    de experiência, formado em Análise e Desenvolvimento de Sistemas, desenvolvo 
                    Sites, Lojas Virtuais e Landing pages que auxiliam empresas a alcançarem 
                    seus objetivos através do mundo digital.
                  </p>
                </div>

            </div>

          </div>
        </div>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-row justify-around my-10">
          <div className="w-60 p-4 flex flex-col items-center justify-center rounded-2xl bg-tc-orange-gradient2">
            <img className="w-20 h-20" src="" alt="" />
            <p className="text-xl py-4 text-center font-semibold">
              Lorem ipsum dolor
            </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ante ipsum, porttitor quis lectus sit amet, efficitur mollis ligula. Donec magna augue, dignissim vitae mollis eu, egestas ac eros. Sed tincidunt sollicitudin ante in consectetur.
            </span>
          </div>
          <div className="w-60 p-4 flex flex-col items-center justify-center rounded-2xl bg-tc-orange-gradient2">
            <img className="w-20 h-20" src="" alt="" />
            <p className="text-xl py-4 text-center font-semibold">
              Lorem ipsum dolor
            </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ante ipsum, porttitor quis lectus sit amet, efficitur mollis ligula. Donec magna augue, dignissim vitae mollis eu, egestas ac eros. Sed tincidunt sollicitudin ante in consectetur.
            </span>
          </div>
          <div className="w-60 p-4 flex flex-col items-center justify-center rounded-2xl bg-tc-orange-gradient2">
            <img className="w-20 h-20" src="" alt="" />
            <p className="text-xl py-4 text-center font-semibold">
              Lorem ipsum dolor
            </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ante ipsum, porttitor quis lectus sit amet, efficitur mollis ligula. Donec magna augue, dignissim vitae mollis eu, egestas ac eros. Sed tincidunt sollicitudin ante in consectetur.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-tc-orange-gradient2">
        <div className="w-full flex flex-row justify-center ">
          <div className="w-[600px] h-60 mx-10 block bg-slate-200"></div>
          <div className="w-[600px] h-60 mx-10 block bg-slate-400"></div>
          <div className="w-[600px] h-60 mx-10 block bg-slate-600"></div>
        </div>
      </div>

    </div>
  )
}

export default App
