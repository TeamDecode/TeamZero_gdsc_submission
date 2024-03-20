import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProfileMenu.css';
class VerticalNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      selectedImage: null
    };
  }

  handleItemClick = (item) => {
    this.setState({ selectedItem: item });
  }

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ selectedImage: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      this.setState({ selectedImage: null });
    }
  }

  renderContent = () => {
    switch (this.state.selectedItem) {
      case 'profile':
        return <ProfileForm />;
      case 'photo':
        return <PhotoForm handleImageChange={this.handleImageChange} selectedImage={this.state.selectedImage} />;
      case 'account_security':
        return <AccountSecurityForm />;
      case 'notifications':
        return <NotificationsForm />;
      case 'attendance_record':
        return <AttendanceRecordForm />;
      case 'quiz_leaderboard':
        return <QuizLeaderboardForm />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="vertical-navbar-container">
        <div className="vertical-navbar">
          <ul>
            <li><a href="#" onClick={() => this.handleItemClick('profile')}>Profile</a></li>
            <li><a href="#" onClick={() => this.handleItemClick('photo')}>Photo</a></li>
            <li><a href="#" onClick={() => this.handleItemClick('account_security')}>Account Security</a></li>
            <li><a href="#" onClick={() => this.handleItemClick('notifications')}>Notifications</a></li>
            <li><a href="#" onClick={() => this.handleItemClick('attendance_record')}>Attendance Record</a></li>
            <li><a href="#" onClick={() => this.handleItemClick('quiz_leaderboard')}>Quiz Leaderboard</a></li>
          </ul>
        </div>
        <div className="form-content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const ProfileForm = () => {
  return (
    <div className="profile-form">
      <h2>Account Details</h2>
      <form>
        <div className="profile-form">
          <h2>Profile Form</h2>
          <form>
            <label>Name:</label>
            <input type="text" name="name" />

            <label>Class:</label>
            <input type="text" name="class" />

            <label>Age:</label>
            <input type="text" name="age" />

            <label>Address:</label>
            <input type="text" name="address" />

            <label>Phone Number:</label>
            <input type="text" name="phone" />

            <label>Email:</label>
            <input type="text" name="email" />

            <label>Bio:</label>
            <textarea name="bio"></textarea>

            <button type="submit">Save</button>
          </form>
        </div>
      </form>
    </div>
  );
}

const PhotoForm = ({ handleImageChange, selectedImage }) => {
  return (
    <div className="photo-form">
      <h2>Photo Form</h2>
      <form>
        <div>
          <label>Image Preview:</label>
          <div className="image-preview">
            {selectedImage && <img src={selectedImage} alt="Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
            {!selectedImage && <div>No image selected</div>}
          </div>
        </div>

        <div>
          <label>Insert Image:</label>
          <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        </div>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

const AccountSecurityForm = () => {
  return <div>Account Security Form</div>;
}

const NotificationsForm = () => {
  return <div>Notifications Form</div>;
}

const AttendanceRecordForm = () => {
  return <div>Attendance Record Form</div>;
}

const QuizLeaderboardForm = () =>  {
  // Sample data for past quizzes
  const pastQuizzes = [
    { id: 1, date: '2023-01-01', score: 80 },
    { id: 2, date: '2023-02-01', score: 90 },
    { id: 3, date: '2023-03-01', score: 35 }, // Example of a score below 40%
    { id: 4, date: '2023-04-01', score: null }, // Example of no participation
  ];

  // Calculate total percentage
  const totalPercentage = pastQuizzes.filter(quiz => quiz.score !== null).reduce((acc, quiz) => acc + quiz.score, 0) / (pastQuizzes.length * 100) * 100;

  return (
    <div className="quiz-activity">

         <CircularProgressbar className='progress-bar-container'
           value={totalPercentage.toFixed(2)}
           text={totalPercentage.toFixed(2)}
           strokeWidth={10} // Adjust the strokeWidth if needed
           radius={1} // Adjust the radius to make the progress bar smaller
           styles={{
             path: { stroke: `rgba(62, 152, 199, ${totalPercentage / 100} )`,
                   animation: 'progressAnimation 1s linear forwards'},
             text: { fill: '#000000', fontSize: '16px' },
           }}
         />
      <h2>Quiz Leaderboard</h2>
      <div>
        <h3>Past Quizzes</h3>
        <div className="quiz-list">
          {pastQuizzes.map(quiz => (
            <div key={quiz.id} className="quiz-box" style={{ backgroundColor: quiz.score !== null ? (quiz.score > 40 ? '#5cd65c' : '#ff4d4d') : '#b3b3b3' }}>
              <p  font-weight: bold >Quiz taken on {quiz.date}</p>
              {quiz.score !== null ? (
                <p>Score: {quiz.score}%</p>
              ) : (
                <p>No participation</p>
              )}
            </div>
          ))}
        </div>
        

        <p>Total Percentage: {totalPercentage.toFixed(2)}%</p>
      </div>
    </div>
  );
};


export default VerticalNavbar;