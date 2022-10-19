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
                
                <div className="w-96">
                  <h2 className="text-2xl font-bold">Quem sou eu?</h2>

                  <p className="w-96 text-lg leading-none text-black font-normal">
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

    </div>
  )
}

export default App
