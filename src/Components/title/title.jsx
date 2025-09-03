

export default function Title({heading, subHeading}) {
  return (
     <div className="mx-auto md:w-4/12 ">
        <p className="text-yellow-600">{heading}</p>
        <p className="py-4 mb-4 text-4xl uppercase border-y-4">{subHeading}</p>
    </div>
  )
}
