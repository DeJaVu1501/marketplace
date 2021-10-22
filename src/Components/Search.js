import { useState } from "react"
import { Link } from "react-router-dom"
import loop from '../images/search.svg'

const Search = ({}) => {
    const [searchName,setsearchName] = useState('')
    return (
        <div class="d1">
            <form>
                <input type="text" value={searchName} onChange={e => setsearchName(e.target.value)} placeholder="Искать здесь" />
                <Link to={`/search/${searchName}`} className='search'><img src={loop} /></Link>
            </form>
        </div>
    )
}

export default Search