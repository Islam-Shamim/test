const AddEmployee = () => {
    const handleAddEmployee = event =>{
        event.preventDefault();
        const form = event.target;
        const first = form.first.value;
        const last = form.last.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const photo = form.photo.value;
        const user = {first,last,email,phone,date,photo}
        console.log(user)
    }
  return (
    <div className="bg-base-50 p-10 w-full">
      <h2 className="text-3xl font-bold font-serif italic px-8">
        Add New Coffee
      </h2>
      <form className="card-body" onSubmit={handleAddEmployee}>
        {/* First & Last Name */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">First name</span>
            </label>
            <input
              type="text"
              name="first"
              placeholder="First Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Last name</span>
            </label>
            <input
              type="text"
              name="last"
              placeholder="Last Name"
              className="input input-bordered"
              required
            />
          </div>
          
        </div>
        {/* email & phone */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered"
              required
            />
          </div>
          
        </div>
        {/* date & photo */}
        <div className="md:flex">
          <div className="form-control w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Date of birth</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2 mr-4">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo url"
            className="input input-bordered"
            required
          />
          </div>
          
        </div>
        {/* button */}
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-primary mt-4"
        />
      </form>
    </div>
  );
};

export default AddEmployee;
