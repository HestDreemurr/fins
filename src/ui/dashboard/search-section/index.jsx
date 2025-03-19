import SearchInput from "./search.jsx"
import AddLink from "./add-link.jsx"

import styles from "./section.module.css"

function SearchSectionRoot({ children }) {
  return (
    <section className={styles.searchSection}>
      {children}
    </section>
  )
}

const SearchSection = {
  Root: SearchSectionRoot,
  Input: SearchInput,
  Link: AddLink
}

export default SearchSection