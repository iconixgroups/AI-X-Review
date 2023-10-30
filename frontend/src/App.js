import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import OverviewTab from './components/OverviewTab';
import ReviewsTab from './components/ReviewsTab';
import LaunchesTab from './components/LaunchesTab';
import TeamTab from './components/TeamTab';
import AwardsTab from './components/AwardsTab';
import EmbedsTab from './components/EmbedsTab';
import ShareTab from './components/ShareTab';
import RequestTrialTab from './components/RequestTrialTab';
import ReportIssueTab from './components/ReportIssueTab';
import Onboarding from './components/Onboarding';
import Discovery from './components/Discovery';
import ProductPages from './components/ProductPages';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Provider store={store}>
      <Onboarding />
      <Discovery />
      <ProductPages />
      <UserProfile />
      <OverviewTab />
      <ReviewsTab />
      <LaunchesTab />
      <TeamTab />
      <AwardsTab />
      <EmbedsTab />
      <ShareTab />
      <RequestTrialTab />
      <ReportIssueTab />
    </Provider>
  );
}

export default App;