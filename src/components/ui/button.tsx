import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'default' | 'brand' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/85',
  brand: 'bg-brand text-brand-foreground hover:bg-brand/90',
  outline: 'border border-border bg-background text-foreground hover:bg-muted',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-muted hover:text-foreground',
  destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
  link: 'text-primary underline-offset-4 hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-10 gap-2 px-5 text-sm',
  sm: 'h-8 gap-1.5 px-4 text-xs',
  lg: 'h-11 gap-2 px-6 text-sm',
  icon: 'size-9',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  )
}
