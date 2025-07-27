"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, ...props }) {
        return (
          <Toast 
            key={id} 
            {...props}
            className="bg-black/40 backdrop-blur-md border-[#23b9d6]/20 text-white"
          >
            <div className="grid gap-1">
              {title && <ToastTitle className="text-white font-bold">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-gray-300">
                  {description}
                </ToastDescription>
              )}
            </div>
            <ToastClose className="text-white hover:text-white/80" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
