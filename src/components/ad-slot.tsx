// Placeholder ad unit — swap the inner div for the real ad network's embed
// (e.g. a Google AdSense <ins class="adsbygoogle"> tag) when that's wired up.
// Standard IAB sizes so real units drop in without a layout change.

import { cn } from '@/lib/utils'

const sizeClasses: Record<AdSlotSize, string> = {
  leaderboard: 'h-[90px] w-full max-w-[728px]',
  rectangle: 'h-[250px] w-full max-w-[300px]',
  'half-page': 'h-[600px] w-full max-w-[300px]',
}

const sizeLabels: Record<AdSlotSize, string> = {
  leaderboard: '728 × 90',
  rectangle: '300 × 250',
  'half-page': '300 × 600',
}

export type AdSlotSize = 'leaderboard' | 'rectangle' | 'half-page'

export function AdSlot({ size, className }: { size: AdSlotSize; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center gap-1.5', className)}>
      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
        Advertisement
      </span>
      <div
        className={cn(
          'flex items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-xs text-muted-foreground',
          sizeClasses[size],
        )}
      >
        {sizeLabels[size]}
      </div>
    </div>
  )
}
