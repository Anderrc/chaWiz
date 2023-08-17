import logo from '../../../assets/logo.svg';
import imgHeader from '../../../assets/header1.jpg'

const Home2 = () => {
  return (
    <div className="mx-auto text-white w-full">
      <section className='bg-white'>

        <div className='justify-center h-[640px] gap-4 bg-cover bg-center blur-lg' style={{ backgroundImage: `url(${imgHeader})` }}>
          <div className='flex flex-col text-white justify-center items-center h-full  '>
            <h1 className="text-4xl text-secondary font-bold mb-6">Bienvenido a CharWiz  sasda</h1>
            <p className="text-lg text-secondary mb-8">La aplicación perfecta para contar caracteres, palabras y espacios.</p>
          </div>
        </div>

      </section>
      <div className="flex items-center gap-3">
        <div className='bg-white p-3 rounded-xl w-[50px] flex justify-center'>
          <img src={logo} alt="CharWiz Logo" width={30} height={30} />
        </div>
        <p className="text-lg">Haz un seguimiento de tus textos de forma rápida y sencilla.</p>
      </div>
      <p className="text-lg text-gray-600 mt-8">
        CharWiz es una herramienta diseñada para desarrolladores y profesionales de control de calidad (QA) que necesitan contar y analizar caracteres, palabras y espacios en sus textos. Ya sea que estés escribiendo código, redactando documentación o realizando pruebas de software, CharWiz te ayuda a mantener el control y la precisión en tus textos.
      </p>
      <p className="text-lg text-gray-600 mt-8">
        ¡Comienza a utilizar CharWiz hoy mismo y optimiza tu trabajo con palabras!
      </p>
    </div>
  );
};

export default Home2;