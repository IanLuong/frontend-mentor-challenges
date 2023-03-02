const QRCard = ({path, title, text}) => {

  return (
    <div className="flex flex-col gap-4 w-[375px] px-4 pt-4 pb-6 m-auto rounded-xl shadow-md bg-white">
      <img src={path} className='rounded-lg' />
      <div className="flex flex-col gap-4 w-[70%] font-outfit items-center self-center text-center">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  )
}

export default QRCard