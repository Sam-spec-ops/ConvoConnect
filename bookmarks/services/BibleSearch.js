import { useState } from 'react'
import Bibleverse from '../JSON/Bibleverse.json'
const SearchVerse = (chapter,verse)=>{
    const [search,setsearch] = useState('')
    const searchdata = Bibleverse.find((item)=>(
        item.toLowercase().includes(chapter.toLowercase() && verse.toLowercase())
    ))
    setsearch(searchdata)
}
export default SearchVerse