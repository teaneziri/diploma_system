const TemaEParaqitur = () => {
  return (
    <div>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6">PARAQIT TEMËN E DIPLOMËS</h1>

        {/* Personal Info */}
        <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow mb-8">
          <div>
            <label className="block font-medium">EMRI DHE MBIEMRI:</label>
            <div className="mt-1 text-gray-700">BBBBBBB SSSSSS</div>
          </div>
          <div>
            <label className="block font-medium">ID:</label>
            <div className="mt-1 text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </div>
          <div>
            <label className="block font-medium">EMRI I PRINDIT:</label>
            <div className="mt-1 text-gray-700">MMMMMMMMMMMMMMMM</div>
          </div>
          <div>
            <label className="block font-medium">DATA E REGJISTRIMIT:</label>
            <div className="mt-1 text-gray-700">xxxxxxxxxxxxxxxx</div>
          </div>
          <div>
            <label className="block font-medium">NUMRI PERSONAL:</label>
            <div className="mt-1 text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </div>
          <div>
            <label className="block font-medium">DREJTIMI:</label>
            <div className="mt-1 text-gray-700">SHKI</div>
          </div>
          <div>
            <label className="block font-medium">GJINIA:</label>
            <div className="mt-1 text-gray-700">F</div>
          </div>
          <div>
            <label className="block font-medium">SPECIALIZIMI:</label>
            <div className="mt-1 text-gray-700">xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block mb-1 font-medium">Titulli i temës së diplomës:</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Zgjidh mentorin:</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Zgjedh profesorin:</option>
              <option value="lavdim-menxhiqi">Lavdim Menxhiqi</option>
              <option value="vesa-morina">Vesa Morina</option>
              <option value="hizer-likaj">Hizer Likaj</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Zgjidhni afatin për paraqitje të temës:
            </label>
            <select className="w-full border rounded px-3 py-2">
              <option>Zgjedh afatin per mbrojtje:</option>
              <option value="shkurt">Shkurt</option>
              <option value="prill">Prill</option>
              <option value="qershor">Qershor</option>
              <option value="shtator">Shtator</option>
              <option value="tetor">Tetor</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Ngarko kërkesën e paraqitjes:</label>
            <div className="border-dashed border-2 border-gray-300 rounded p-6 text-center">
              <p className="mb-2">Drag and drop files here to upload</p>
              <p className="text-sm text-gray-500">( or )</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Select files to upload
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default TemaEParaqitur;
