"use client"

import type { AnchorHTMLAttributes, PropsWithChildren } from "react"
import type { VariantProps } from "class-variance-authority"

import { buttonVariants } from "@/components/ui/button"

type LinkButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof buttonVariants> & {
      className?: string
    }
>

export function LinkButton({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: LinkButtonProps) {
  return (
    <a className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </a>
  )
}
