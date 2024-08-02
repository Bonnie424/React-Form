import "./componentStyle/SubmitData.css"

export default function SubmitData({name, email}){
  return (
    <div className="submitted-data">
        <h2 className="submitted-name">{name}</h2>
        <h2 className="submitted-email">{email}</h2>
      </div>
  )
};