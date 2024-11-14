'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { BoardDialog } from './dialog';
import { BoardAlertDialog } from './alert-dialog';

import { Bolt, CircleX } from 'lucide-react';

export const BoardTableCell = () => {
  return (
    <>
      <BoardDialog>
        <Button
          variant='outline'
          size='icon'
          className='mr-2'>
          <Bolt />
        </Button>
      </BoardDialog>
      <BoardAlertDialog>
        <Button
          variant='outline'
          size='icon'
          className=''>
          <CircleX />
        </Button>
      </BoardAlertDialog>
    </>
  );
};
