/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { ComponentProps, ComponentType } from 'react'

  export const MDXContext: React.Context<Record<string, React.ComponentType<any>>>
  export const useMDXComponents: (
    components?: Record<string, React.ComponentType<any>>
  ) => Record<string, React.ComponentType<any>>

  const MDXContent: ComponentType<ComponentProps<'div'>>
  export default MDXContent
}
