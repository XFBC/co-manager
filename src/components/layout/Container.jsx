export default function Container(props) {
  return (
    <div className="container w-[1280px] bg-gray-400 m-auto flex justify-between p-2 h-[600px] ">
      {props.children}
    </div>
  )
}
