import React from 'react'

const MenuItem = ({ title, open, onToggle, subItems }) => {
  return (
    <>
      <li
        onClick={onToggle}
        className="flex justify-between items-center cursor-pointer px-4 py-2 hover:bg-green-600 select-none"
      >
        <span className="font-semibold">{title}</span>
        <span className="text-xl font-bold">{open ? "−" : "+"}</span>
      </li>
      {open && subItems && (
        <ul className="bg-green-100 text-gray-600 ml-6">
          {subItems.map((sub, idx) => (
            <li key={idx} className="px-4 py-1 cursor-default hover:text-green-900">
              » {sub.title}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MenuItem