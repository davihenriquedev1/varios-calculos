import { Frame } from "@/components/home/Frame";

const Home = () => {
	return (
		<main className="flex flex-col w-full items-center justify-center">

			<section className="flex flex-col w-full justify-between bg-gray-500/5 md:flex-row gap-1 md:h-screen">
				<div className="flex justify-start h-full p-6 md:flex-1">
					<div className="text-5xl text-color-palette5 font-bold text-shadow-bottom-left shadow-color-palette4 sm:text-8xl md:p-5">
						<p>Calcule,</p>
						<p>Simule,</p>
						<p>Resolva.</p>
					</div>
				</div>
				<div className="h-full flex justify-end items-end md:flex-1 ">
					<img src="/images/doll-and-calculator.png" alt="" className="w-[70%] md:w-[90%]"/>
				</div>
			</section>

			<section className="flex flex-col w-full px-4 py-10 gap-8 md:px-10 md:py-14 md:h-screen bg-gradient-to-t from-color-palette1/5 to-gray-500/5">
				
				<div className="flex w-full justify-center items-center ">
					<h2 className="font-extrabold tracking-wide text-color-palette4 text-center text-2xl md:text-5xl">Múltiplas Calculadoras</h2>
				</div>
				<div className="grid grid-cols-2 h-full gap-3 md:grid-cols-3 md:gap-8">
					<Frame title="Calculadora de IMC" desc="Calcule seu Índice de Massa Corporal."/>
					<Frame title="Calculadora Cíentífica" desc="Use nossa calculadora avançada."/>
					<Frame title="Calculadora de Investimentos" desc="Calcule seus rendimentos."/>
					<Frame title="Calculadora de Empréstimos" desc="Calcule o quanto você vai pagar."/>
					<Frame title="Calculadora de Conversão de Moedas" desc="Veja a conversão de Real pra Dólar e muito mais."/>
					<Frame title="Calculadora de Finanças Pessoais" desc="Planeje suas finanças pessoais."/>
				</div>

			</section>

			<section>

			</section>
		</main>
	);
}

export default Home;