const PageWrapper = ({
  children,
  className = '',
  kicker,
  title,
  accent,
  subtitle,
  innerClassName = '',
}) => {
  return (
    <div className={`page-shell ${className}`.trim()}>
      <div className='page-shell__glow' aria-hidden='true' />
      <div className={`page-shell__inner ${innerClassName}`.trim()}>
        {(kicker || title || subtitle) && (
          <header className='page-header'>
            {kicker && <p className='page-kicker'>{kicker}</p>}
            {title && (
              <h2 className='section__title'>
                {title} {accent && <span>{accent}</span>}
              </h2>
            )}
            {subtitle && <p className='page-subtitle'>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </div>
  )
}

export default PageWrapper
