import { usePostDriverMutation, useGetNameDriverQuery } from "../../store/api"
import { NavBar } from "../../components/navbar"
import { useForm } from "../../hooks"
import { Footer } from "../../components/footer"


const formData = {
  name: '',
  surname: '',
  nationality: '',
  date: '',
  team: '',
  description: '',
  image: ''
}

const formValidations = {
  name: [ (value) => value.length >= 3, 'The name must be at least 3 characters long'],
  surname: [ (value) => value.length >= 3, 'The surname must be at least 3 characters long'],
  nationality: [ (value) => value.length >= 3, 'The nationality must be at least 3 characters long'],
  date: [ (value) => /^(\d{4})-(\d{2})-(\d{2})$/.test(value), 
  'The date must be in the format YYYY-MM-DD'],
  team: [ (value) => value.length >= 3, 'The teams must be at least 3 characters long'],
  description: [ (value) => value.length >= 5, 'The description must be at least 3 characters long'],
  image: [ (value) => /^(http|https):\/\/[^ "]+$/.test(value), 'The image must be a valid URL']
}

export const NewDrive = () => {
  
  const [postDriver, {isLoading} ] = usePostDriverMutation();


  
  const { formState, name, surname, nationality, date, team, description, image, onInputChange,
          isFormValid, nameValid, surnameValid, nationalityValid, dateValid, teamsValid, descriptionValid, imageValid,
          onResetForm  } = useForm(formData, formValidations);

  const { data: existingDriver } = useGetNameDriverQuery(name);
  const isDriverExists = existingDriver && existingDriver.length > 0;


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (isDriverExists) {
      alert('Driver already exists');
      return;
    }
    postDriver(formState);
    console.log(formState);
    onResetForm();
    alert('Driver created successfully');

  };

  return (
    <>
      <NavBar />

      <div className="container-2xl mx-auto pt-16">
        <h1 className="text-4xl font-bold text-center">Create new Drive</h1>
        
        <form onSubmit={handleSubmit} className='flex flex-col container-md mx-auto p-3'>
          <div className='m-2'>
            <label
              htmlFor='name'
              className='text-xl font-bold'
            >
              Name:
            </label>            
            <input
              type='text' 
              name="name" 
              value={name} 
              onChange={onInputChange}
              placeholder="Ej. Jorge"
              className='inputForm'
            />
            {nameValid && <span className="error">{nameValid}</span>}
          </div>

          <div className='m-2'>
            <label
              htmlFor='surname'
              className='text-xl font-bold'
            >
              Last Name:
            </label>            
            <input
              type='text' 
              name="surname" 
              value={surname} 
              onChange={onInputChange} 
              placeholder="Ej. Garcia"
              className='inputForm'
            />
            {surnameValid && <span className="error">{surnameValid}</span>}
          </div>

          <div className='m-2'>
            <label
              htmlFor='nationality'
              className='text-xl font-bold'
            >
              Nationality:
            </label>            
            <input
              type='text' 
              name="nationality" 
              value={nationality} 
              onChange={onInputChange} 
              placeholder="Ej. Peruano"
              className='inputForm'
            /> 
            {nationalityValid && <span className="error">{nationalityValid}</span>}
          </div>          
          
          <div className='m-2'>
            <label
              htmlFor='date'
              className='text-xl font-bold'
            >
              Date of Birth:
            </label>            
            <input
              type='text'
              name="date" 
              value={date} 
              onChange={onInputChange} 
              placeholder="Format: YYYY-MM-DD"
              className='inputForm'
            /> 
            {dateValid && <span className="error">{dateValid}</span>}
          </div>          
          
          <div className='m-2'>
            <label
              htmlFor='team'
              className='text-xl font-bold'
            >
              Teams:
            </label>            
            <input
              type='text' 
              name="team" 
              value={team} 
              onChange={onInputChange} 
              placeholder="Ej. Ferrari"
              className='inputForm'
            /> 
            {teamsValid && <span className="error">{teamsValid}</span>}
          </div>          
          
          <div className='m-2'>
            <label
              htmlFor='description'
              className='text-xl font-bold'
            >
              Description:
            </label>            
            <textarea
              type='textbox'
              name="description" 
              value={description}
              onChange={onInputChange}
              placeholder="Ej. Piloto de F1..."
              rows="4"
              color='50'
              className='inputForm'
            /> 
            {descriptionValid && <span className="error">{descriptionValid}</span>}
          </div>

          <div className='m-2'>
            <label
              htmlFor='image'
              className='text-xl font-bold'
            >
              Image:
            </label>            
            <input
              type='text'
              name="image" 
              value={image}
              onChange={onInputChange}
              placeholder="https://www.example.com/image.jpg"
              className='inputForm'
            /> 
            {imageValid && <span className="error">{imageValid}</span>}
          </div>

          <button 
            className={`btn btn-primary ${!isFormValid || isLoading ? 'disabled' : ''} `}
            type="submit"
            disabled={!isFormValid || isLoading}
          >
            Create Drive
          </button>
          
        </form>
      </div>
      <Footer />
    </>
  )
}
