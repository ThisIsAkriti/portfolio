
const ProjectTag = ({name , onClick , isSelect}) => {

    const buttonStyle = isSelect? "text-pink-800 border-pink-800" : "text-slate-500 border-slate-500 hover:border-white hover:text-white";
   return (
    <div>
      <button className={`${buttonStyle} rounded-xl border md:px-6 md:py-2 px-4 py-1  `}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  )
}

export default ProjectTag
