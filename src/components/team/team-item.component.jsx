const TeamItem = ({ team }) => {
  return (
    <div className="col-md-6 col-lg-3" key={team.id}>
      <div className="img-block mb-5">
        <img src={team.image ? team.image : 'assets/images/t1.jpg'} className="img-fluid  img-thumbnail rounded-circle" alt="team-member" />
        <div className="content mt-2">
          <h4>{team.name}</h4>
          <p className="text-muted">{team.designation}</p>
        </div>
      </div>
    </div>
  );
};
export default TeamItem;
