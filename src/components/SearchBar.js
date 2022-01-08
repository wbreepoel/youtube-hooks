import React, {useState} from "react"

const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('')

    const onFormSubmit = event => {
        event.preventDefault();
        onSubmit(term) 
    }


    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>YouTube Search</label>
                    <input type="text" value={term} onChange={event => setTerm(event.target.value)}></input>
                </div>
            </form>
        </div>
    )

}

export default SearchBar