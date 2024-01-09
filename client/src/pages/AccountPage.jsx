import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

const Profile = () => {
    const { profileId } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { profileId: profileId },
  });

  const profile = data?.getUser || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{profile.username}</h1>
    </div>
  );
};

export default Profile;