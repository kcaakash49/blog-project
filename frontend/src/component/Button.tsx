// import { useState } from "react"

interface propstype {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: propstype) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="bg-black text-white px-10 py-1 rounded-lg hover:bg-red-400 w-full"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
