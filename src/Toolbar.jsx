function Toolbar({props}) {
  
  const {filters, selected, onSelectFilter} = props
  const hidden = (item) => {
    if (selected === item)
    {return 'selected'}
  }
  return(
    <>
      {filters.map((filter, index) => (
        <button
        key={index}
        className={hidden(filter)}
        onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </>
  )
}

export default Toolbar