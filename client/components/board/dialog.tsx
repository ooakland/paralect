import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type BoardDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const BoardDialog = ({ isOpen, onClose }: BoardDialogProps) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[450px]'>
        <DialogHeader>
          <DialogTitle>Edit vacancy</DialogTitle>
          <DialogDescription>Make changes to your vacancy here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
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
                <SelectGroup>
                  <SelectItem value='active'>Active</SelectItem>
                  <SelectItem value='archived'>Archived</SelectItem>
                  <SelectItem value='closed'>Closed</SelectItem>
                </SelectGroup>
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
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
