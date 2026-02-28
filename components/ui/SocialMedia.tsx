import { Facebook, Github, Linkedin, Slack, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
    className?:string;
    iconClassName?:string;
    toolTipClassName?:string;
};

const SocialLink = [
    {
        title:'Facebook',
        href:'https://www.youtube.com/@reactjsBD',
        icon:<Facebook className='h-5 w-5'/>,
    },
    {
        title:'Youtube',
        href:'https://www.youtube.com/@reactjsBD',
        icon:<Youtube className='h-5 w-5'/>,
    },
    {
        title:'Github',
        href:'https://www.youtube.com/@reactjsBD',
        icon:<Github className='h-5 w-5'/>,
    },
    {
        title:'LinkedIn',
        href:'https://www.youtube.com/@reactjsBD',
        icon:<Linkedin className='h-5 w-5'/>,
    },
    {
        title:'Slack',
        href:'https://www.youtube.com/@reactjsBD',
        icon:<Slack className='h-5 w-5'/>,
    },
];


const SocialMedia = ({className, iconClassName, toolTipClassName}:Props) => {
  return (
    <TooltipProvider>
        <div className={cn('flex items-center gap-3.5')}>
            {SocialLink?.map((item)=>(
                <Tooltip key={item?.title}>
                    <TooltipTrigger asChild>
                        <Link 
                        key={item?.title} href={item?.href} 
                        target='_blank'
                        rel='noopener noreferrer'
                        className={cn('p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect ',iconClassName)}>
                        {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn('bg-white text-darkCOlor font-semibold',toolTipClassName)}>
                        {item?.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia