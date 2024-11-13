type Props = {
    title?:string,
    desc?:string,
    bg?:string
}

export const Frame = ({title, desc, bg}:Props) => {

    return (
        <div className={`flex flex-1 flex-col p-4 gap-3 justify-between shadow-lg shadow-color-palette1 rounded-lg hover:scale-105 transition-all duration-500 ${bg ? 'bg-cover bg-center':'bg-gradient-to-r from-slate-50/40 to-slate-200/40'} md:flex-row`} style={bg ? {background: `url(${bg})`} : {}}>
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-sm mb-4 text-secondary-foreground">{desc}</p>
            </div>
            <button type="button" className="bg-color-palette1 text-white px-4 py-2 rounded font-bold hover:brightness-105 transition-all">Acessar</button>
		</div>
    )
}