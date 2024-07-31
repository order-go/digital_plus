const Title=({title,color}: {title: string,color?: string}) => {
    return <h1 className={`  font-bold text-xl text-black  ${color}`}>{title}</h1>;
}

export default Title;