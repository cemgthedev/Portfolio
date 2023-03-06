import '../../styles/global.css'

export interface ProgressBarProps {
    percentage?: number
}

export function ProgressBar({ percentage }: ProgressBarProps) {
    return (
        <svg width="100%" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <linearGradient id="gradientBgScroll" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
            </linearGradient>
            <linearGradient id="gradientBgRange" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,255,255,0.4)" />
                <stop offset="40%" stopColor="rgba(0,255,255,0.8)" />
                <stop offset="60%" stopColor="rgba(0,255,255,1)" />
            </linearGradient>
            </defs>
            <rect 
            y="10" 
            width="100%" 
            height="12" 
            rx="6" 
            fill='url(#gradientBgScroll)'
            />
            <g>
            <rect 
            y="10" 
            width={`${percentage}%`} 
            height="12"
            rx="6" 
            fill="url(#gradientBgRange)" />
            <rect 
            y="11" 
            width={`${percentage}%`}
            height="10" 
            rx="100" 
            fill="url(#gradientBgRange)" 
            className='blur-sm rounded-full absolute top-0'/> 
            </g>  
        </svg>
    )
}