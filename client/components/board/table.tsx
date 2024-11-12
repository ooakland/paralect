import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BoardTableCell } from './table-cell';

export const BoardTable = () => {
  const vacancies = [
    {
      id: 1,
      company: 'Paralect',
      vacancy: 'Junior FullStack Engineer (React | Node)',
      salaryFork: '500$-1000$',
      status: 'active',
      note: 'Need a test assigment'
    },
    {
      id: 2,
      company: 'LeverX',
      vacancy: 'Junior Backend Engineer (Node.js)',
      salaryFork: '700$-900$',
      status: 'active',
      note: 'Need a test assigment'
    },
    {
      id: 3,
      company: 'EPAM',
      vacancy: 'Junior+ Frontend Engineer (React)',
      salaryFork: '600$-800$',
      status: 'active',
      note: 'Strong verbal and written English (B2-C1)'
    },
    {
      id: 4,
      company: 'ID Finance',
      vacancy: 'Junior Frontend Engineer (React)',
      salaryFork: '400$-500$',
      status: 'archived',
      note: 'Experience in Fintech domain'
    },
    {
      id: 5,
      company: 'AIBY',
      vacancy: 'Junior Frontend Engineer (Vue.js)',
      salaryFork: '700$-800$',
      status: 'archived',
      note: '6+ months of experience with Vue.js'
    }
  ];

  return (
    <Table>
      <TableCaption>A list of your vacancies.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[150px]'>Company</TableHead>
          <TableHead className='w-[300px]'>Vacancy</TableHead>
          <TableHead className='w-[150px]'>Salary fork</TableHead>
          <TableHead className='w-[150px]'>Status</TableHead>
          <TableHead className='w-[300px]'>Note</TableHead>
          <TableHead className='text-center'>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vacancies.map((vacancy) => (
          <TableRow key={vacancy.id}>
            <TableCell className='font-medium'>{vacancy.company}</TableCell>
            <TableCell>{vacancy.vacancy}</TableCell>
            <TableCell className='font-medium'>{vacancy.salaryFork}</TableCell>
            <TableCell>{vacancy.status}</TableCell>
            <TableCell>{vacancy.note}</TableCell>
            <TableCell>
              <BoardTableCell />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
