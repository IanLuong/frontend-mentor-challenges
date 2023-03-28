import { useState } from 'react'
import iconArrowDown from '/images/icon-arrow-down.svg'
import iconArrowUp from '/images/icon-arrow-up.svg'

const NavbarDropdown = ({ title, options }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <li className="flex items-center relative">
      <span
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-center gap-1 cursor-pointer hover:text-almostBlack focus:text-almostBlack"
      >
        <p>{title}</p>
        <img src={isExpanded ? iconArrowUp : iconArrowDown} alt="" />
      </span>

      {options && (
        <ul
          className={`${
            isExpanded ? 'flex' : 'hidden'
          } absolute top-8 right-0 flex-col gap-2 p-5 bg-almostWhite rounded-xl shadow-xl`}
        >
          {options.map((option) => (
            <li>
              <a className="flex items-center gap-4 cursor-pointer whitespace-nowrap hover:text-almostBlack focus:text-almostBlack">
                {option.image && (
                  <img className="w-4" src={option.image} alt={option.title} />
                )}
                <p className="text-sm w-22">{option.title}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default NavbarDropdown
