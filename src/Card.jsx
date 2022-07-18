import Path from "./assets/path.svg";

export default function Card(props) {
  return (
    <div className="card">
      <img src={ props.item.imageUrl } alt="Country Picture" className="card-picture"/>
      <div className="card-info">
          <div>
            <img src={ Path } alt="location icon" className="location_icon"/>
            <span className="card-location"> { props.item.location } </span>  <a href={ props.item.googleMapsUrl } className="card-link">view on Google Maps</a></div>
          <div className="card-landmark"> { props.item.title } </div>
          <div className="card-dates"> { props.item.startDate } - { props.item.endDate } </div>
          <div className="card-content"> { props.item.description } </div>
      </div>
    </div>
  )
}