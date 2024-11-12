'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { BoardDialog } from './dialog';

import { Bolt, CircleX } from 'lucide-react';

export const BoardTableCell = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button
        variant='outline'
        size='icon'
        className='mr-2'
        onClick={handleOpen}>
        <Bolt />
      </Button>
      <Button
        variant='outline'
        size='icon'>
        <CircleX />
      </Button>
      <BoardDialog
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
};
