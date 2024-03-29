import { useState } from 'react'
import iconArrowDown from '/images/icon-arrow-down.svg'
import iconArrowUp from '/images/icon-arrow-up.svg'

const SidebarDropdown = ({ title, options }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <li>
      <span
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-center gap-4 cursor-pointer hover:text-almostBlack"
      >
        <p>{title}</p>
        <img src={isExpanded ? iconArrowUp : iconArrowDown} />
      </span>
      {options && (
        <ul className={`${isExpanded ? 'flex' : 'hidden'} flex-col gap-4 my-4`}>
          {options.map((option) => (
            <li>
              <a className="flex items-center gap-4 px-6 cursor-pointer hover:text-almostBlack focus:text-almostBlack">
                {option.image && (
                  <img className="w-4" src={option.image} alt={option.title} />
                )}
                <p>{option.title}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default SidebarDropdown
