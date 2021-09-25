import React, { useState } from 'react';

const AddPipe = () => {
  const [answers, setAnswers] = useState({});
  const [isvoid, setIsVoid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const generateDiameterOptions = () => {
    let diameters = [
      '1/8″',
      '1/4″',
      '3/8″',
      '1/2″',
      '3/4″',
      '1″',
      '1 1/4″',
      '1 1/2″',
      '2″',
      '2 1/2″',
      '3″',
      '3 1/2″',
      '4″',
      '4 1/2″',
      '5″',
      '6″',
      '7″',
      '8″',
      '9″',
      '10″',
      '11″',
      '12″',
      '14″',
      '16″',
      '18″',
      '20″',
      '22″',
      '24″',
      '26″',
      '28″',
      '30″',
      '32″',
      '34″',
      '36″',
      '42″',
      '46″',
      '48″',
      '54″',
      '60″',
    ];

    return diameters.map((item, i) => <option key={i}>{item}</option>);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(answers);
    console.log(isvoid);
  };
  return (
    <>
      <h1>Add New Pipe</h1>
      <form action="" style={{ padding: '2.5%' }} onSubmit={handleSubmit}>
        <label htmlFor="">Location: </label>
        <input onChange={handleChange} name="location" type="text" />
        <br />
        <span>Is the pipe void? </span>
        <input
          onClick={() => setIsVoid(false)}
          type="radio"
          name="void"
          id="0"
          checked
        />
        <label htmlFor="0">No</label>
        <input
          onClick={() => setIsVoid(true)}
          type="radio"
          name="void"
          id="1"
        />
        <label htmlFor="1">Yes</label>
        <br />
        <label htmlFor="coil_no">Pipe coil no: </label>
        <input onChange={handleChange} name="coil_no" type="text" />
        <br />
        <label htmlFor="heat_no">Pipe Heat No: </label>
        <select name="heat_no">
          <option hidden disabled selected>
            -- select an option --
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br />
        <label htmlFor="diameter">Diameter: </label>
        <input list="heat_no" />
        <datalist id="heat_no">
          <option hidden disabled selected>
            -- select an option --
          </option>
          {generateDiameterOptions()}
        </datalist>
        <br />
        <br />
        <label htmlFor="schedule">Schedule and Class: </label>
        <input onChange={handleChange} name="schedule" type="text" />{' '}
        {/**Convert to select input */}
        <br />
        <label htmlFor="wall_thickness">Wall Thickness: </label>
        <input onChange={handleChange} name="wall_thickness" type="text" />{' '}
        {/**Convert to select input */}
        <br />
        <br />
        <label htmlFor="grade">Grade: </label>
        <select name="grade" id="">
          <option value="Gr. A">Gr. A</option>
          <option value="Gr. B">Gr. B</option>
          <option value="X42">X42</option>
          <option value="X45">X45</option>
          <option value="X46">X46</option>
          <option value="X50">X50</option>
          <option value="X52">X52</option>
          <option value="X56">X56</option>
          <option value="X60">X60</option>
          <option value="X65">X65</option>
          <option value="X70">X70</option>
          <option value="X80">X80</option>
          <option value="X100">X100</option>
        </select>
        <br />
        <br />
        <label htmlFor="length">Length: </label>
        <input onChange={handleChange} name="length" type="text" />
        <label htmlFor="coating">Coating: </label>
        <input onChange={handleChange} name="coating" type="text" />
        <br />
        <label htmlFor="coating_color">Coating Color: </label>
        <select name="coating_color" id="">
          <option hidden disabled selected>
            -- select an option --
          </option>
          <option value="" style={{ backgroundColor: 'red' }}>
            Red
          </option>
          <option value="" style={{ backgroundColor: 'white' }}>
            White
          </option>
          <option value="" style={{ backgroundColor: 'lightgray' }}>
            Lite Gray
          </option>
          <option value="" style={{ backgroundColor: 'lightgreen' }}>
            Lite Green
          </option>
          <option value="" style={{ backgroundColor: 'yellow' }}>
            Yellow
          </option>
        </select>
        <br />
        <label htmlFor="material_type">Material Type: </label>
        <select name="material_type" id="">
          <option value="steel">Steel</option>
        </select>
        <br />
        <label htmlFor="po_number">PO Number: </label>
        <input onChange={handleChange} name="po_number" type="text" />{' '}
        {/**Change to select */}
        <br />
        <br />
        <label htmlFor="smart_label">Smart Label: </label>
        <input onChange={handleChange} name="smart_label" type="text" />
        <br />
        <div>
          <p>Comments: </p>
          <textarea
            onChange={handleChange}
            name="comments"
            id=""
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AddPipe;