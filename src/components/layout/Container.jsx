export default function Container(props) {
  return (
    <div>
      <div className=" bg-gray-400 w-[85%] m-auto h- px-4 h-[100vh] ">
        {props.children}
      </div>
    </div>
  )
}
