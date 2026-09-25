import parse from 'html-react-parser'

const ResumeItem = ({ icon, year, title, desc, points = [] }) => {
  return (
    <div className='resume__item'>
      <div className='resume__icon'>{icon}</div>
      <span className='resume__date'>{year}</span>
      <h3 className='resume__Subtitle'>{parse(title)}</h3>
      {desc && <p className='resume__description'>{desc}</p>}
      {points.length > 0 && (
        <ul className='resume__points'>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ResumeItem
