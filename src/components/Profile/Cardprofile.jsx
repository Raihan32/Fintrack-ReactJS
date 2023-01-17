import './cardprofile.css';
import Profile from '../Profile/img/fp.png';

const Cardprofile = () => {
  return (
    <div>
      <div className="title">
        <p> My Profile</p>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          width: '1250px',
          height: '720px',
          left: '95px',
          top: '157px',
          display: 'flex',
          flexdirection: 'column',
          alignitems: 'flex-start',
          padding: '0px',
          gap: '50px',
        }}
      >
        <div className="card">
          <img className="pict" src={Profile} />
          <div className="nama">Dafa Huda</div>
          <div className="cardprofile">
            <div className="profile">Profile</div>
            <div className="record">Record</div>
            <div className="saved">Saved</div>
          </div>
          <button className="button"></button>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card2 mb-6">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="pro"> Profile</h6>
              </div>
              <div className="col-sm-9-text-sexondary desc"> Nama </div>
              <p className="desc1"> Dafa Huda</p>
              <div className="col-sm-9-text-sexondary desc"> Email </div>
              <p className="desc1"> dafa@gmail.com</p>
              <div className="col-sm-9-text-sexondary desc"> Password </div>
              <p className="desc1"> dafahuda123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cardprofile;
