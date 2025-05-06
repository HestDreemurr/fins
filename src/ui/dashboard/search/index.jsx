import SearchInput from "./search.jsx"
import AddLink from "./add-link.jsx"

import styles from "./section.module.css"

function SearchRoot({ children }) {
  return (
    <section className={styles.searchSection}>
      {children}
    </section>
  )
}

const Search = {
  Root: SearchRoot,
  Input: SearchInput,
  Link: AddLink
}

export default Search