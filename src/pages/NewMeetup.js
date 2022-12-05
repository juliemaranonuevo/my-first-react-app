import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const addMeetUpHandler = (meetUpData) => {
    console.log(meetUpData);
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler}/>
    </section>
  );
}

export default NewMeetupPage;
