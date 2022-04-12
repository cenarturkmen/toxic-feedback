const Form = (props) => {
  return (
    <form className="flex flex-col w-72 content-center justify-center  ">
      <input
        className="rounded  mx-0 bg-stone-500  text-white   border-0 p-2 m-2  hover:border-0"
        onChange={props.handleFormChange}
        name="name"
        type="mail"
        required
        placeholder="Your name"
      />
      <input
        className="rounded mx-0 bg-stone-500  text-white   border-0 p-2 m-2  hover:border-0"
        onChange={props.handleFormChange}
        name="email"
        type="text"
        placeholder=" Your Email"
      />
      <textarea
        required
        className="rounded  bg-stone-500  mx-0 text-white   h-28 border-0 p-2 m-2  focus:b-0"
        onChange={props.handleFormChange}
        name="message"
        placeholder=" Your Message"
      ></textarea>
      <button
        onClick={props.handleSend}
        className="rounded  bg-stone-600 mx-0  text-white   border-0 p-2 m-2 hover:bg-stone-700 hover:border-0"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
