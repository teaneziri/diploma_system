const Header = ({ studentName, onLogout }) => {
  return (
    <header className="flex justify-between items-center bg-blue-800 text-white p-4 shadow">
      <h2 className="text-xl font-semibold ">Mirësevini, {studentName}!</h2>
      <button
        onClick={onLogout}
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Dil
      </button>
    </header>
  );
};

export default Header;
