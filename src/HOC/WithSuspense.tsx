import { ComponentType, FC, Suspense } from 'react'

export const withSuspense =
  <P extends object>(Component: ComponentType<P>): FC<P> =>
  (props) => {
    return (
      <Suspense fallback={<span></span>}>
        <Component {...(props as P)} />
      </Suspense>
    )
  }
