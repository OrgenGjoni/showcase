import React, { useState } from 'react'
import './search_bar.scss'
import { user } from '../../types/user.type'

interface SearchBarProps {
  results: user[] | null
}

const SearchBar: React.FC<SearchBarProps> = ({ results }) => {
  const [matches, setMatches] = useState<user[] | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const renderList = () => {
    if (matches) {
      return matches.map((el: user, idx: number) => (
        <li key={idx}>{el.username}</li>
      ))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (results !== null) {
      const regexp = new RegExp(`${e.target.value}`, 'i')
      const match = results.filter((el) => el.username.match(regexp))

      setMatches(e.target.value.length > 0 ? match : null)
    }
  }

  const handleFocus = () => {
    setOpen(true)
  }

  const handleBlur = () => {
    setOpen(false)
  }

  return (
    <div className="search-bar" onFocus={handleFocus} onBlur={handleBlur}>
      <input
        type="text"
        className="search-bar__input"
        onChange={handleChange}
        tabIndex={0}
      />
      <ul className={`search-bar__results${open ? '' : '--hidden'}`}>
        {renderList()}
      </ul>
    </div>
  )
}

export default SearchBar
