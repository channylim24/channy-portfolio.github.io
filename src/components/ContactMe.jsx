import "../css/contactme.css";

function ContactMe() {
  return (
    <section id="contactMe" class="contactMe">
      <h1>CONTACT ME</h1>
      <div className="form-container">
        <form onSubmit={() => {}}>
          <input type="text" placeholder="name_" />
          <input type="email" placeholder="email_" />
          <textarea type="text" placeholder="messages_" />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
