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
      <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>
        ← Back to Products
      </Link>
        <Account />
        {/* {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id}>
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div>
                  {order.products.map(({ _id, name, price }, index) => (
                    <div key={index}>
                      <Link to={`/products/${_id}`}>
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null} */}
      </div>
    </>
  );
}

export default AccountPage;
