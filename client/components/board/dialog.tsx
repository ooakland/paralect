import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { STATUSES } from '@/lib/constants';

type BoardDialogProps = {
  children: React.ReactNode;
};

export const BoardDialog = ({ children }: BoardDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[450px]'>
        <DialogHeader>
          <DialogTitle>Edit vacancy</DialogTitle>
          <DialogDescription>Make changes to your vacancy here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <form className='grid gap-4 py-4'>
          <div className='grid items-center gap-2'>
            <Label htmlFor='name'>Company</Label>
            <Input
              id='name'
              className='col-span-3'
            />
          </div>
          <div className='grid items-center gap-2'>
            <Label htmlFor='name'>Vacancy</Label>
            <Input
              id='name'
              className='col-span-3'
            />
          </div>
          <div className='grid items-center gap-2'>
            <Label htmlFor='name'>Salary fork</Label>
            <Input
              id='name'
              className='col-span-3'
            />
          </div>
          <div className='grid items-center gap-2'>
            <Label htmlFor='name'>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Select vacancy status' />
              </SelectTrigger>
              <SelectContent>
                {STATUSES.map((status: string) => (
                  <SelectGroup key={status}>
                    <SelectItem value={status}>{status}</SelectItem>
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='grid items-center gap-2'>
            <Label htmlFor='name'>Note</Label>
            <Textarea
              id='name'
              className='col-span-3'
            />
          </div>
        </form>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
