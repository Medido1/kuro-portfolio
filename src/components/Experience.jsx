function Experience({
  date, jobTitle, company, description
}){
  return (
    <div className="text-center">
      <p className="mt-2">
        {date}
      </p>
      <p className="font-bold my-2">
        {jobTitle}
      </p>
      <p className="mb-2">
        {company}
      </p>
      <p>
        {description}
      </p>
      <div className="h-1 w-24 bg-blue-500 rounded-full mx-auto mt-2"></div>
    </div>
  )
}

export default Experience