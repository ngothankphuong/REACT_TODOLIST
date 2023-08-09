import { useState } from 'react'
function App() {

  const [work, setWork] = useState(''); 

  return (
    <div className="h-screen flex gap-8 justify-center items-center">
      <input
        type="text"
        className="outline-none border border-blue-600 px-4 py-2 w-[300px]"
        value={work}
        onChange = {e=>{
          setWork(e.target.value)
        }}
      />
      <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
        onClick = {
          ()=>{
            console.log(work);
          }
        }
      >
        ADD
      </button>
    </div>
  );
}

export default App;
