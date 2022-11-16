const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://i.picsum.photos/id/991/200/200.jpg?hmac=zdrg88cOolAGaFqNdqLZG2ECaXB0AjpYxU8PNyq3dBw',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description: 'This is a first'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://i.picsum.photos/id/827/200/300.jpg?hmac=0Q7y5JGXuxSXgO7VUvdNhXC4yoAupOJiKmRS9RoPqs8',
    address: 'Meetupstreet 5, 12345 Meetup City 2',
    description: 'This is a second'
  },
  {
    id: 'm3',
    title: 'This is a third meetup',
    image: 'https://i.picsum.photos/id/827/200/300.jpg?hmac=0Q7y5JGXuxSXgO7VUvdNhXC4yoAupOJiKmRS9RoPqs8',
    address: 'Meetupstreet 5, 12345 Meetup City 2',
    description: 'This is a second'
  }
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>


      {/* <table style={{ border: '1px solid', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid' }}>Id</th>
            <th style={{ border: '1px solid' }}>Title</th>
            <th style={{ border: '1px solid' }}>Image</th>
            <th style={{ border: '1px solid' }}>Address</th>
            <th style={{ border: '1px solid' }}>Descriptiom</th>
          </tr>
        </thead>
        <tbody>
          {DUMMY_DATA.map((meetup) => {
            return (
              <tr key={meetup.id}>
                <td style={{ border: '1px solid' }}>{meetup.id}</td>
                <td style={{ border: '1px solid' }}>{meetup.title}</td>
                <td style={{ border: '1px solid' }}>
                  <img src={meetup.image}></img>
                </td>
                <td style={{ border: '1px solid' }}>{meetup.address}</td>
                <td style={{ border: '1px solid' }}>{meetup.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </section>
  );
}

export default AllMeetupsPage;