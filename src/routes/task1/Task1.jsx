import { useState } from "react";

function Task1() {
  const initialValues = {
    medicine: "",
    dosage: "",
    strength: "",
    morning: false,
    afternoon: false,
    evening: false,
    durationMin: "00",
    durationHrs: "00",
    beforeFood: false,
  };
  const [medicineDetails, setMedicineDetails] = useState(initialValues);
  const [beforeFoodData, setBeforeFoodData] = useState(true);
  const [addedMedicine, setAddedMedicine] = useState([]);
  const [medicineEditing, setMedicineEditing] = useState(null);
  const {
    medicine,
    dosage,
    strength,
    morning,
    afternoon,
    evening,
    durationMin,
    durationHrs,
  } = medicineDetails;
  const array1To12 = Array.from({ length: 12 }, (_, i) => i + 1);
  const array01To60 = Array.from({ length: 60 }, (_, i) =>
    i + 1 < 10 ? "0" + (i + 1) : i + 1
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setMedicineDetails({ ...medicineDetails, [name]: newValue });
  };
  const handleEdit = (index) => {
    setMedicineDetails(addedMedicine[index]);

    setMedicineEditing(index);
  };
  const deleteMedicine = (index) => {
    setAddedMedicine((prev) => prev.filter((_, i) => i !== index));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (medicineEditing !== null) {
      const updatedMedicine = [...addedMedicine];
      updatedMedicine[medicineEditing] = medicineDetails;
      setAddedMedicine(updatedMedicine);
      setMedicineEditing(null);
      setMedicineDetails(initialValues);
    } else {
      setAddedMedicine((prev) => [
        ...prev,
        { ...medicineDetails, beforeFood: beforeFoodData },
      ]);
      setMedicineDetails(initialValues);
    }
  };
  console.log(addedMedicine);
  console.log(beforeFoodData);
  return (
    <div className="m-4 flex flex-col gap-6">
      <h1 className="text-2xl border-b-2 pb-4">Add Prescription</h1>
      <form className="flex  flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-center ">
          <div className="relative ">
            <label className=" ml-2 p-2 absolute bg-white">Medicine</label>
            <input
              type="text"
              placeholder="Medicine"
              className="mt-4 p-4 w-full border-2"
              name="medicine"
              value={medicine}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="relative">
            <label className=" ml-2 p-2 absolute bg-white">Dosage</label>
            <input
              type="text"
              placeholder="Dosage"
              className="mt-4 p-4 w-full border-2"
              name="dosage"
              value={dosage}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="relative">
            <label className=" ml-2 p-2 absolute bg-white">Strength</label>
            <input
              type="text"
              placeholder="Strength"
              className="mt-4 p-4 w-full border-2"
              value={strength}
              name="strength"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="relative mt-auto">
            <label className=" ml-2 p-2 absolute bg-white">Frequency</label>
            <div className="mt-4 p-4 w-full  border-2 flex justify-between">
              <div className="flex justify-center items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  name="morning"
                  value={morning}
                  checked={morning}
                  onChange={handleInputChange}
                />
                <label>Morning</label>
              </div>
              <div className="flex justify-center items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  name="afternoon"
                  checked={afternoon}
                  value={afternoon}
                  onChange={handleInputChange}
                />
                <label>Afternoon</label>
              </div>{" "}
              <div className="flex justify-center items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  name="evening"
                  checked={evening}
                  value={evening}
                  onChange={handleInputChange}
                />
                <label>Evening</label>
              </div>
            </div>
          </div>
          <div className="relative">
            <label className=" ml-2 p-2 absolute bg-white">Duration</label>
            <div className="mt-4  p-4 w-full border-2 flex gap-4 justify-between">
              <select
                name="durationMin"
                value={durationMin}
                onChange={handleInputChange}
                className="w-full border-2 p-2 mt-2"
              >
                <option>Minutes</option>
                {array01To60.map((items) => (
                  <option key={items} value={items}>
                    {items}
                  </option>
                ))}
              </select>
              <select
                name="durationHrs"
                value={durationHrs}
                onChange={handleInputChange}
                className="w-full border-2 p-2 mt-2"
              >
                <option>Hours</option>
                {array1To12.map((items) => (
                  <option key={items} value={items}>
                    {items}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-4 bg-gray-500 p-6 mt-auto">
            <button
              type="button"
              onClick={(e) => setBeforeFoodData(true)}
              className={`w-full p-4 ${
                beforeFoodData ? "bg-white" : "bg-gray-500"
              }`}
            >
              Before Food
            </button>

            <button
              type="button"
              onClick={(e) => setBeforeFoodData(false)}
              className={`w-full ${
                beforeFoodData ? "bg-gray-500" : "bg-white"
              }`}
            >
              After Food
            </button>
          </div>
        </div>
        <div className="ml-auto flex gap-4">
          {medicineEditing !== null ? (
            <button
              type="button"
              onClick={(e) => {
                setMedicineEditing(null);
                setMedicineDetails(initialValues);
              }}
              className="text-white bg-red-500 rounded-lg p-4 font-bold max-w-52 "
            >
              Cancel
            </button>
          ) : null}
          <button
            type="sumbit"
            className=" ml-auto bg-yellow-500 rounded-lg p-4 font-bold max-w-52 "
          >
            {medicineEditing !== null ? (
              <p>Update Medicine</p>
            ) : (
              <p>Add Medicine</p>
            )}
          </button>
        </div>
      </form>
      <h2 className=" text-xl pb-4 border-b-4">List of Medicines added</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Medicine Name
              </th>
              <th scope="col" className="px-6 py-3">
                Strength
              </th>
              <th scope="col" className="px-6 py-3">
                Dosage
              </th>
              <th scope="col" className="px-6 py-3">
                Frequency
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {addedMedicine.map((items, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {items.medicine}
                  </th>
                  <td className="px-6 py-4">{items.strength}</td>
                  <td className="px-6 py-4">{items.dosage}</td>
                  <td className="px-6 py-4">
                    {items.morning ? <p>Morning</p> : null}{" "}
                    {items.afternoon ? <p>Afternoon</p> : null}{" "}
                    {items.evening ? <p>Evening</p> : null}
                  </td>
                  <td className="px-6 py-4">
                    {items.durationHrs} hr {items.durationMin} min{" "}
                    {items.beforeFood ? <p>Before Food</p> : <p>After Food</p>}
                  </td>
                  <td className="px-6 py-4 flex gap-2 text-right">
                    <button
                      className="text-white bg-blue-500 px-4 py-2 rounded-lg"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-white font-bold bg-red-500 px-4 py-2 rounded-lg"
                      onClick={() => deleteMedicine(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task1;
