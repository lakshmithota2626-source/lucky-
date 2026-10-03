import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    department: '',
    year: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student Name is required.';
    } else if (formData.studentName.trim().length < 2) {
      newErrors.studentName = 'Student Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.department.trim()) {
      newErrors.department = 'Please select or enter a department.';
    }

    if (!formData.year.trim()) {
      newErrors.year = 'Please select or enter the academic year.';
    }

    return newErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    // Prevent default browser form submission (no page reload)
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
      return;
    }

    // Clear any previous errors
    setErrors({});

    // Store submitted data in React state
    setSubmittedData({
      studentName: formData.studentName.trim(),
      email: formData.email.trim(),
      department: formData.department.trim(),
      year: formData.year.trim()
    });
  };

  // Reset form to register another student
  const handleReset = () => {
    setFormData({
      studentName: '',
      email: '',
      department: '',
      year: ''
    });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2 className="registration-heading">Student Registration</h2>
        <p className="registration-subheading">
          Please fill in the details below to complete your student registration.
        </p>

        {/* Display Submitted Data when registration is successful */}
        {submittedData ? (
          <div className="success-section" id="registration-success">
            <div className="success-banner">
              <span className="success-badge-icon">✓</span>
              <h3 className="success-title">Registration Successful</h3>
              <p className="success-message">
                Your student profile has been registered in the system.
              </p>
            </div>

            <div className="submitted-details-card">
              <div className="detail-row">
                <span className="detail-label">Student Name:</span>
                <span className="detail-value">{submittedData.studentName}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{submittedData.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Department:</span>
                <span className="detail-value">{submittedData.department}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Year:</span>
                <span className="detail-value">{submittedData.year}</span>
              </div>
            </div>

            <div className="action-buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleReset}
              >
                Register Another Student
              </button>
            </div>
          </div>
        ) : (
          /* Controlled Registration Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="registration-form"
          >
            {/* Student Name */}
            <div className="form-group">
              <label htmlFor="studentName" className="form-label">
                Student Name <span className="required-star">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                className={`form-input ${errors.studentName ? 'input-error' : ''}`}
                placeholder="e.g. John Doe"
                value={formData.studentName}
                onChange={handleChange}
              />
              {errors.studentName && (
                <span className="error-text">{errors.studentName}</span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span className="required-star">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="e.g. john.doe@university.edu"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            {/* Department */}
            <div className="form-group">
              <label htmlFor="department" className="form-label">
                Department <span className="required-star">*</span>
              </label>
              <select
                id="department"
                name="department"
                className={`form-input ${errors.department ? 'input-error' : ''}`}
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="Computer Science and Engineering">
                  Computer Science and Engineering
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electronics and Communication Engineering">
                  Electronics and Communication Engineering
                </option>
                <option value="Electrical and Electronics Engineering">
                  Electrical and Electronics Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
              </select>
              {errors.department && (
                <span className="error-text">{errors.department}</span>
              )}
            </div>

            {/* Year */}
            <div className="form-group">
              <label htmlFor="year" className="form-label">
                Year <span className="required-star">*</span>
              </label>
              <select
                id="year"
                name="year"
                className={`form-input ${errors.year ? 'input-error' : ''}`}
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
              {errors.year && (
                <span className="error-text">{errors.year}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Registration;
