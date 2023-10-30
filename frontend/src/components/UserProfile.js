import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/actions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  return (
    <div id="userProfile">
      <h2>User Profile</h2>
      <div>
        <h3>History</h3>
        <ul>
          {user.history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Notification Preferences</h3>
        <ul>
          {user.notificationPreferences.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Email Newsletters</h3>
        <ul>
          {user.emailNewsletters.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Push Notifications</h3>
        <ul>
          {user.pushNotifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;