import { useState } from "react";
import StateRow from "./StateRow";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { HiDotsVertical } from "react-icons/hi";

const Table = () => {
  const [states, setStates] = useState(["State 1", "State 2"]);
  const [variants, setVariants] = useState(["Variant 1"]);

  const addState = () => setStates([...states, `State ${states.length + 1}`]);
  const removeState = (index) => setStates(states.filter((_, i) => i !== index));
  const addVariant = () => setVariants([...variants, `Variant ${variants.length + 1}`]);
  const removeVariant = (index) => setVariants(variants.filter((_, i) => i !== index));

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4 bg-gray-50 rounded-lg border-2 border-gray-200 mt-12">
        <div className="mb-4">
          <button onClick={addState} className="btn">Add State</button>
          <button onClick={addVariant} className="btn">Add Variant</button>
        </div>

        <table className=" border-collapse">
          <thead>
            <tr className="">
              <th className="min-w-[100px]"></th>
              <th className="text-gray-500 text-lg font-semibold p-2 text-center">Product Filters</th>
              {variants.map((variant, idx) => (
                <th key={idx} className="text-gray-500 text-lg font-semibold p-2 text-left">
                  <div className='flex items-center text-nowrap'>
                    {idx === 0 ? "Variant Primary" : variant}
                    <HiDotsVertical className='cursor-pointer' onClick={() => removeVariant(idx)} />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {states.map((state, idx) => (
              <StateRow key={idx} index={idx} state={state} variants={variants} removeState={() => removeState(idx)} />
            ))}
          </tbody>
        </table>
      </div>
    </DndProvider>
  );
};

export default Table;
