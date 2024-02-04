interface LogoProps {
  color: string
}

const Logo = (props: LogoProps) => {
  const { color } = props
  return (
    <div className="divFlex">
      <img
        src={color === 'white' ? 'assets/Logo.png' : 'assets/LogoBlack.png'}
        aria-label="logo"
        className="imgLogo"
      />
      <h5>Canvix</h5>
    </div>
  )
}

export default Logo
