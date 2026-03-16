export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Container com espaçamento horizontal generoso */}
      <div className="container mx-auto grid md:grid-cols-3 gap-x-20 gap-y-10 p-12">
        
        {/* COLUNA 1 - SOBRE */}
        <div className="md:pr-8">
          <h3 className="font-bold text-xl mb-6 text-red-500">BC Consultoria</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Mais de 20 anos atuando em intermediação de negócios no Brasil, 
            com expertise em captação de áreas urbanas e rurais junto aos 
            principais bancos e instituições financeiras.
          </p>
        </div>

        {/* COLUNA 2 - CONTATO */}
        <div className="md:px-8">
          <h3 className="font-bold text-xl mb-6 text-red-500">Contato</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 font-medium mb-1">Email:</p>
              <p className="text-gray-200">contato@businesscenterconsult.com.br</p>
            </div>
            <div>
              <p className="text-gray-300 font-medium mb-1">WhatsApp:</p>
              <p className="text-gray-200">(11) 91353-5562</p>
            </div>
          </div>
        </div>

        {/* COLUNA 3 - ENDEREÇO */}
        <div className="md:pl-8">
          <h3 className="font-bold text-xl mb-6 text-red-500">Endereço</h3>
          <div className="space-y-4">
            <p className="text-gray-200 leading-relaxed">
              Alameda Mamoré, 503 - Conj. 64
            </p>
            <p className="text-gray-200 leading-relaxed">
              6º Andar - Edifício Icon
            </p>
            <p className="text-gray-200 leading-relaxed">
              Alphaville - Barueri/SP
            </p>
            <p className="text-gray-200 leading-relaxed font-medium">
              CEP 06454-040
            </p>
          </div>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="bg-black text-center py-6 px-4 text-sm text-gray-400">
        © {new Date().getFullYear()} BC Consultoria - CNPJ 04.355.961/0001-70
      </div>
    </footer>
  );
}