import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();

  const addMeetUpHandler = (meetUpData) => {
    /***************************************************************************************
     *  FETCH IS A DEFAULT BUILT IN JAVASCRIPT FUNCTION THAT ALLOWS US SEND HTTP REQUESTS 
     ***************************************************************************************/
    fetch(
      'https://react-getting-started-1edb8-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetUpData),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then( () => {
      navigate('/')
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetupPage;
