'use client';

import { useQuery } from '@tanstack/react-query';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BoardTableCell } from './table-cell';

import { fetcher } from '@/lib/fetcher';
import { BASE_URL } from '@/lib/constants';

import { Vacancy } from '@/types';

export const BoardTable = () => {
  const { data: vacancies, isLoading } = useQuery({
    queryKey: ['vacancies'],
    retry: 1,
    refetchOnWindowFocus: false,
    queryFn: () => fetcher(BASE_URL)
  });

  if (isLoading) return 'Loading...';

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
        {vacancies?.data.map((vacancy: Vacancy) => (
          <TableRow key={vacancy._id}>
            <TableCell className='font-medium'>{vacancy.company}</TableCell>
            <TableCell>{vacancy.position}</TableCell>
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
