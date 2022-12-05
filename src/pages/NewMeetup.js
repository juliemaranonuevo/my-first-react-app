import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

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
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetupPage;
