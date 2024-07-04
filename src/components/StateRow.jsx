import { useDrag, useDrop } from "react-dnd";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const ItemTypes = {
  STATE: "state",
};

const StateRow = ({ index, state, variants, removeState, moveRow }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.STATE,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.STATE,
    hover: (item) => {
      if (item.index !== index) {
        moveRow(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <tr
      ref={(node) => drag(drop(node))}
      className={`state-row text-center content-center ${isDragging ? 'dragging' : ''}`}
    >
      <td className="flex justify-center items-center w-[100px] border-e-2 border-gray-900">
        <div className="text-2xl action-icons">
          <MdOutlineDeleteOutline
            className="icon"
            onClick={removeState}
          />
          <div className="flex items-center justify-center font-semibold">
            <span className="text-3xl me-1">1</span>
            <TbGridDots className="mt-1" />
          </div>
        </div>
      </td>
      <td className="p-2 min-w-[400px] border-e-2 border-gray-900 text-center content-center">
        <div className="w-[300px] min-h-[180px] bg-white shadow-sm rounded-lg mb-2"></div>
      </td>
      {variants.map((_, idx) => (
        <td key={idx} className="p-2 min-w-[200px] border-e-2 border-gray-900">
          <div className="variant-placeholder">Design Placeholder</div>
        </td>
      ))}
    </tr>
  );
};

export default StateRow;
