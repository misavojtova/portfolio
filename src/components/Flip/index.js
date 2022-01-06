function Flip({ photo, children, href }) {
  return (
    <div className='flip-container'>
      <div className='flip-card'>
        <div className='front'>
          <img src={photo} alt='' />
        </div>

        <div className='back'>
          <div className='demo-text'>{children}</div>

          <button className='demo-btn'>
            <a href={href} target='_blank' rel='noreferrer'>
              Demo Here
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Flip;
