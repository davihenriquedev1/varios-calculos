const Home = () => {
	return (
		<main className="flex flex-col w-full items-center justify-center">

			<section className="flex flex-col md:flex-row gap-1 md:h-screen w-full bg-gray-300/20 justify-between">
				<div className="flex justify-start md:flex-1 h-full p-6">
					<div className="text-5xl sm:text-8xl text-color-palette5 font-bold md:p-5 text-shadow-bottom-left shadow-color-palette4">
						<p>Calcule,</p>
						<p>Simule,</p>
						<p>Resolva.</p>
					</div>
				</div>
				<div className="md:flex-1 h-full flex justify-end items-end">
					<img src="/images/doll-and-calculator.png" alt="" className="w-[70%] md:w-[90%]"/>
				</div>
			</section>

			<section>

			</section>
			<section>

			</section>
		</main>
	);
}

export default Home;