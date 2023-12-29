import { StudentsTable } from "@/components/StudentsTable";
import { students } from "@/data/students";

const Page = () => {
  return (
    <div className="container p-9"> 
    <h1 className="text-5xl mb-10 text-center">Lista de estudantes</h1>
      <StudentsTable students={students}/>
    </div>
  )
}

export default Page;