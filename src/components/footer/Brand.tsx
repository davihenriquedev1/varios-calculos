export const Brand = () => {
    return (
        <div className="flex flex-col items-center justify-center shadow-md rounded-lg p-6">
            <div className="flex flex-col w-full justify-center items-center space-x-4 gap-3">
                <img src="/images/logo-empresa-dev.png" alt="Logo da Empresa" className="w-16 rounded-full"/>
                <p className="text-xl font-semibold text-primary">[Nome da Empresa]</p>
            </div>
            <div className="mt-4 text-gray-600">
                &copy; 2024 [Nome da Empresa]. Todos os direitos reservados.
            </div>
        </div>
    );
};
