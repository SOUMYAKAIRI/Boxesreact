const Box = props => {
  //  Write your code here.
  const {className, text} = props
  return (
    <div className={`box ${className}`}>
      <p className='box-title'>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div>
    <div className='boxes-app-container'>
      <h1 className='heading'>Boxes</h1>
      <div className='boxes-container'>
        <Box className='small-box' text='Small' />
        <Box className='medium-box' text='Medium' />
        <Box className='large-box' text='Large' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
