'use client'

import * as React from 'react'

interface ComponentInstallationProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ComponentInstallation({ children, className, ...props }: ComponentInstallationProps) {
  return (
    <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6" {...props}>
      <a
        className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
        href="/docs/installation/react"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="currentColor"
        >
          <title>React.js</title>
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
        </svg>
        <p className="mt-2 font-medium">React.js</p>
      </a>

      <a
        className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
        href="/docs/installation/vue"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-10 w-10" viewBox="0 0 18 8">
          <title>Vue.js</title>
          <path
            fill="currentColor"
            d="M2.717 1H.5a.5.5 0 0 0-.432.752l7 12a.5.5 0 0 0 .864 0l7-12A.5.5 0 0 0 14.5 1h-2.217L7.5 8.972z"
          />
          <path fill="currentColor" d="M11.117 1H8.19L7.5 2.382L6.809 1H3.883L7.5 7.028z" />
        </svg>
        <p className="font-medium">Vue.js</p>
      </a>

      <a
        className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
        href="/docs/installation/svelte"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 18 14">
          <title>Svelte</title>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12.438 2.947c.584.9.645 1.875.346 2.614a4.457 4.457 0 0 0-1.903-1.077a.75.75 0 0 0-1.157-.669L8.046 4.904h-.001L5.53 6.54a.75.75 0 0 0 .817 1.258l2.516-1.635c.955-.62 2.496-.286 3.385 1.082c.888 1.368.565 2.911-.39 3.531l-5.032 3.268c-.954.62-2.496.287-3.385-1.08c-.584-.9-.644-1.876-.346-2.615c.551.52 1.211.893 1.904 1.077a.75.75 0 0 0 1.157.669L10.35 9.37a.75.75 0 0 0-.817-1.258L7.016 9.746c-.954.62-2.496.287-3.384-1.08c-.889-1.369-.566-2.913.39-3.533l5.031-3.267c.955-.62 2.496-.288 3.385 1.08m1.329 3.935c.955-1.319.904-3.252-.071-4.752C12.479.256 10.061-.577 8.236.608L3.204 3.875c-1.68 1.092-2.002 3.34-1.091 5.152c-.955 1.319-.904 3.252.07 4.752c1.218 1.874 3.636 2.707 5.46 1.522l5.032-3.268c1.68-1.091 2.002-3.339 1.092-5.151"
            clip-rule="evenodd"
          />
        </svg>
        <p className="mt-3 font-medium">Svelte</p>
      </a>
    </div>
  )
}