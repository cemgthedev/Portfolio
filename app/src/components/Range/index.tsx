import clsx from 'clsx';
import '../../styles/global.css';

export interface RangeProps {
    bgRange?: string,
    bgProgress?: string,
    percentageRange: number
}

export function Range({ bgRange = 'bg-neutral-200', bgProgress='bg-cyan-500', percentageRange = 0 }: RangeProps) {
    return (
        <div
          className={clsx(
            'w-full h-[24px] rounded-full',
            bgRange
          )}
        >
            <div
              className={clsx(
                `h-[24px] rounded-full w-[${percentageRange}%]`,
                bgProgress
              )}
            ></div>
        </div>
    );
}