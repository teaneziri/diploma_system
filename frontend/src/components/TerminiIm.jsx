import { useState } from "react";

const TerminiIm = () => {
  const [specializimi, setSpecializimi] = useState("");
  
  const temat = [
    {
      titulli: "Inteligjenca Artificiale në Shërbime Publike",
      pershkrimi: "Kjo temë trajton përdorimin e algoritmeve të AI në optimizimin e shërbimeve shtetërore...",
      mentori: "Prof. Dr. Arben Xh.",
      specializimi: "Inxhinieri softuerike",
    },
    {
      titulli: "Roli i Marketingut Digjital në Bizneset Lokale",
      pershkrimi: "Analizë e strategjive digjitale që ndihmojnë ndërmarrjet e vogla të arrijnë sukses.",
      mentori: "Prof. Luljeta K.",
      specializimi: "Inxhinieri e Web-it",
    },
    {
      titulli: "E Drejta e Autorit në Kohën Digjitale",
      pershkrimi: "Hulumtim mbi mbrojtjen ligjore të pronës intelektuale në internet.",
      mentori: "Prof. Dr. Artan M.",
      specializimi: "Multimedia",
    },
  ];

  const tematFiltruara = specializimi
    ? temat.filter((tema) => tema.specializimi === specializimi)
    : temat;

  return (
    <>
      <div className="mb-6">
        <label htmlFor="specializimi" className="block text-sm font-medium text-gray-700 mb-2">
          Filtroni sipas specializimit:
        </label>
        <select
          id="specializimi"
          value={specializimi}
          onChange={(e) => setSpecializimi(e.target.value)}
          className="w-full md:w-1/3 border rounded-md p-2"
        >
          <option value="">Të gjitha specializimet</option>
          <option value="inxhinieri-softuerike">Inxhinieri softuerike</option>
          <option value="sheknca-e-te-dhenave">Shkenca e te dhenave</option>
          <option value="inxhinieri-e-webit">Inxhinieri e Web-it</option>
          <option value="multimedia">Multimedia</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tematFiltruara.map((tema, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold">Tema: {tema.titulli}</h3>
            <p className="text-sm text-gray-700 mt-2">{tema.pershkrimi}</p>
            <p className="mt-2 text-sm">
              Mentor: <strong>{tema.mentori}</strong>
            </p>
            <p className="text-sm">specializimi: {tema.specializimi}</p>
            <button className="mt-4 bg-[rgba(36,64,130,1)] text-white px-4 py-2 rounded hover:bg-blue-700">
              Apliko
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TerminiIm;
