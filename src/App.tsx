import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-10 w-full">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onOpenChange={({ open }) => setOpen(open)} />
    </div>
  );
}

export default App;
