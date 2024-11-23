function Button(props) {
  return (
    <button {...props} className="bg-slate-500 text-white px-4 py-2 rounded-md">
      {props.children}
    </button>
  );
}

export default Button;
