const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h3 className="contact-title">Contacto</h3>
      <form className="form" action="https://formspree.io/f/meqveeoq" method="post">
        <input
          className="form--fieldSpace"
          placeholder="Nombre completo"
          name="name"
          type="text"
          id="fullName"
          required
        />
        <div className="form--fieldSpace__mailphone">
          <input
            className="form--fieldSpace form--fieldSpace__mail"
            placeholder="Correo electrónico"
            name="email"
            type="email"
            id="email"
            required
          />
          <input
            classNameName="form--fieldSpace form--fieldSpace__phone"
            placeholder="Teléfono"
            id="phone"
            name="tel"
            type="tel"
          />
        </div>
        <textarea
          className="form--fieldSpaceComment"
          placeholder="Escribe tu mensaje aquí"
          name="mesage"
          id="message"
          rows="8"
          cols="80"
          required
        ></textarea>
        <label for="button"></label>
        <input
          className="form--button"
          type="submit"
          id="button"
          name="send"
          value="Enviar"
        />
      </form>
    </section>
  );
};
export default Contact;
