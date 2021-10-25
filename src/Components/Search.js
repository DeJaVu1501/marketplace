import { useState } from "react"
import { useHistory} from "react-router";
import { Link } from "react-router-dom"
import loop from '../images/search.svg'

const Search = ({}) => {
    const [searchName,setsearchName] = useState('')
    let history = useHistory()
    const onClick = ()=>history.push(`/search/${searchName}`)
    return (
        <div class="d1">
            <form>
                <input type="text" value={searchName} onChange={e => setsearchName(e.target.value)}  onKeyDown={e => e.keyCode === 13 && onClick()} placeholder="Искать здесь" />
                <Link to={`/search/${searchName}`} className='search'><img src={loop} /></Link>
            </form>
        </div>
    )
}

export default Search