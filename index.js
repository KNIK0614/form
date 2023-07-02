// EducationForm.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEducationProfile } from './actions';
import './EducationForm.scss';

const EducationForm = () => {
  const educationProfile = useSelector((state) => state.educationProfile);
  const dispatch = useDispatch();
  const [educationData, setEducationData] = useState({
    HighestQualification: educationProfile.HighestQualification,
    NameOftheInstitution: educationProfile.NameOftheInstitution,
    course: educationProfile.course,
    PrimaryQualification: educationProfile.PrimaryQualification,
    NameOftheInstitution: educationProfile.NameOftheInstitution,
    IntermediateCourse: educationProfile.IntermediateCourse,
    YearOfPassing: educationProfile.YearOfPassing,
    Title:educationProfile.Title,
    FieldofRecognition:educationProfile. FieldofRecognition,
    Dateofpublishing:educationProfile.Dateofpublishing,
  });

  const handleInputChange = (e) => {
    setEducationData({ ...educationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEducationProfile(educationData));
  };

  return (
    <form className="education-form" onSubmit={handleSubmit}>
      <div className='total'>
        <div>
          <h3>EDIT EDUCATION DETAILS</h3>
        </div>

        <div className="form-row">
          <div className='details'>
            <p>
              <h3>Highest Qualification:</h3>
            </p>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="HighestQualification"
                name="abc"
                value={educationData.HighestQualification}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='details'>
            <h3>Primary Qualification</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="NameOftheInstitution"
                name="NameOftheInstitution"
                value={educationData.NameOftheInstitution}
                onChange={handleInputChange}
                
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className='details'>
            <p>
              <h3>course</h3>
            </p>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='mnc'
                id="course"
                name="course"
                value={educationData.course}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='details'>
            <h3>Years of Experience</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='3'
                id="YearsOfExperience"
                name="YearsOfExperience"
                value={educationData.YearsOfExperience}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div>
          <h3>ADDITIONAL DETAILS</h3>
        </div>
        <div>
          <h3>Note: Any details that are not verified yet contribute to profile strength</h3>
        </div>

        <div className="form-row">
          <div className='details'>
            <h3>Primary Qualification</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="PrimaryQualification"
                name="PrimaryQualification"
                value={educationData.PrimaryQualification}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='details'>
            <h3>Name Of the Institution</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="NameOftheInstitution"
                name="NameOftheInstitution"
                value={educationData.NameOftheInstitution}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className='details'>
            <h3>Intermediate Course</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="IntermediateCourse"
                name="IntermediateCourse"
                value={educationData.IntermediateCourse}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='details'>
            <h3>Name Of the Institution</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="NameOftheInstitution"
                name="NameOftheInstitution"
                value={educationData.NameOftheInstitution}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className='details'>
            <h3>Course (Intermediate)</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='MNC'
                id="Course(Intermediate)"
                name="Course(Intermediate)"
                value={educationData.Course}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='details'>
            <h3>Year Of Passing</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='123'
                id="YearOfPassing"
                name="YearOfPassing"
                value={educationData.YearOfPassing}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className='profileBoxUpload'>
          <div className='profileUploadText'>Upload Final Markssheet</div>
        </div>

      
        <div>
          <h3>Certification / Recognition / Award (if any)</h3>
        </div>

        <div className="form-row">
          <div className='details'>
            <h3>Title</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="Title"
                name="Title"
                value={educationData.Title}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='details'>
            <h3>Name Of the Institution</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="NameOftheInstitution"
                name="NameOftheInstitution"
                value={educationData.NameOftheInstitution}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className='details'>
            <h3> Field of Recognition</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id=" FieldofRecognition"
                name=" FieldofRecognition"
                value={educationData. FieldofRecognition}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='details'>
            <h3>Date of publishing</h3>
            <div className='profileFieldInput'>
              <input
                type="text"
                placeholder='abc'
                id="Dateofpublishing"
                name="Dateofpublishing"
                value={educationData.Dateofpublishing}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className='profileBoxUpload'>
          <div className='profileUploadText'>Upload Final Markssheet</div>
        </div>

        <div className="form-actions">
          <button type="button">Back</button>
          <button type="submit">Update</button>
        </div>

      </div>
    </form>
  );
};

export default EducationForm;
