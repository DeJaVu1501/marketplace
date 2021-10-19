import { useState } from "react"
import { Link } from "react-router-dom"
import { actionSearch } from "../actions"
import loop from '../images/search.svg'

const Search = ({}) => {
    const [search,setSearch] = useState('')
    return (
        <div class="d1">
            <form>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Искать здесь" />
                <Link to='/search/' className='search'><img src={loop} /></Link>
            </form>
        </div>
    )
}

export default Search