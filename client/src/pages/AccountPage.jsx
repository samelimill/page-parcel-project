import { Link } from 'react-router-dom';
import Account from '../components/Account'
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function AccountPage() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div>
        <Account />
      </div>
    </>
  );
}

export default AccountPage;
