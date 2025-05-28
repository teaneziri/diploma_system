const TemaDiplomes = () => {
  return (
    <div>
       <main className="flex-1 p-10">
        <h1 className="text-2xl font-semibold mb-8 text-center">TEMA E PARAQITUR</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Emri dhe mbiemri</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Departamenti</th>
                
                <th className="border border-gray-300 px-4 py-2">Tema e diplomës</th>
                <th className="border border-gray-300 px-4 py-2">Mentori</th>
                <th className="border border-gray-300 px-4 py-2">Statusi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">111111111</td>
                <td className="border border-gray-300 px-4 py-2">Filan Fisteku</td>
                <td className="border border-gray-300 px-4 py-2">ff1111@ubt-uni.net</td>
                <td className="border border-gray-300 px-4 py-2">Shkenca Kompjuterike dhe Inxhinieri</td>
                
                <td className="border border-gray-300 px-4 py-2">xxxxxxxxxxxxxxxxx</td>
                <td className="border border-gray-300 px-4 py-2">Emri i prof</td>
                <td className="border border-gray-300 px-4 py-2 text-green-600 font-semibold">Approved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default TemaDiplomes;
