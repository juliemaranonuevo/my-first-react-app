import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

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
    description: 'This is a third'
  },
  {
    id: 'm4',
    title: 'This is a third meetup',
    image: 'https://i.picsum.photos/id/827/200/300.jpg?hmac=0Q7y5JGXuxSXgO7VUvdNhXC4yoAupOJiKmRS9RoPqs8',
    address: 'Meetupstreet 5, 12345 Meetup City 2',
    description: 'This is a fourth'
  }
];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true);

    /***************************************************************************************
     *  FETCH IS A DEFAULT BUILT IN JAVASCRIPT FUNCTION THAT ALLOWS US SEND HTTP REQUESTS 
     ***************************************************************************************/
    fetch(
      'https://react-getting-started-1edb8-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json()
    }).then(data => {

      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
        {/* <MeetupList meetups={DUMMY_DATA}/> */}

        {/* <ul>
          {DUMMY_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>;
          })}
        </ul> */}

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
}

export default AllMeetupsPage;