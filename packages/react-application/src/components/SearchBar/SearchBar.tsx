import React, { useState, useRef, useEffect, MouseEventHandler } from 'react'
import './search_bar.scss'
import { user } from '../../types/user.type'
import SearchResultItem from './SearchResultItem/SearchResultItem'

interface SearchBarProps {
  results: user[] | null
}

const SearchBar: React.FC<SearchBarProps> = ({ results }) => {
  const [matches, setMatches] = useState<user[] | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const searchBarRef = useRef<null | HTMLDivElement>(null)

  const renderList = () => {
    if (matches) {
      return matches.map((el: user, idx: number) => (
        <SearchResultItem
          user={el}
          key={idx}
          onClick={() => console.log('clicked')}
        />
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
    console.log(document.activeElement)
    setOpen(false)
  }

  const verifyTarget = (e: MouseEvent) => {
    if (!searchBarRef.current?.contains(e.target as any)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('click', verifyTarget)

      return () => {
        document.removeEventListener('click', verifyTarget)
      }
    }
  })

  return (
    <div className="search-bar" onFocus={handleFocus} ref={searchBarRef}>
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
