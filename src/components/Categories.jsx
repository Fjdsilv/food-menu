const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {
        categories.map((category) => {
          return <button 
                    type="button"
                    className="btn"
                    onClick={() => filterItems(category)}
                    key={category}
                >{category}
                </button>
        })
      }
    </div>
  )
}
export default Categories