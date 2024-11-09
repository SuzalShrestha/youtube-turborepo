import { Search, Youtube } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
export function Navbar() {
    return (
        <nav className='m-4'>
            <div className='flex justify-around items-center'>
                <Youtube size={32} />
                <div className='flex gap-5 border-2 py-1 px-5'>
                    <Search size={32} />
                    <Input
                        placeholder='Search'
                        className='border-0 shadow-none'
                    />
                </div>
                <div className='flex gap-5'>
                    <Button>Sign In</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </nav>
    );
}
