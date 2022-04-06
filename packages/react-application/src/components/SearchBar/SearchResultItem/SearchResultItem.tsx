import React from 'react'
import { user } from '../../../types/user.type'
import './search_result_item.scss'

interface SearchResultItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  user: user
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  user,
  ...props
}) => {
  return (
    <li {...props} className="result-item">
      <div className="result-item__inner">
        <img src={user.profilePicSrc} />
        <div className="result-item__inner-data">
          <span>{user.username}</span>
          <small>{user.followersAmount}</small>
        </div>
      </div>
    </li>
  )
}

export default SearchResultItem
