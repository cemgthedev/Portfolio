import clsx from 'clsx';
import '../../styles/global.css';

export interface RangeProps {
    bgRange?: string,
    bgProgress?: string,
    level: string
}

export function Range({ bgRange = 'bg-neutral-200', bgProgress='bg-cyan-500', level='Básico' }: RangeProps) {
    return (
        <div
          className={clsx(
            'w-full h-[24px] rounded-full',
            bgRange
          )}
        >
            <div
              className={clsx(
                `h-[24px] rounded-full`,
                {
                  'w-0': level === 'Básico',
                  'w-1/2': level === 'Intermediário',
                  'w-full': level === 'Avançado'
                },
                bgProgress
              )}
            ></div>
        </div>
    );
}