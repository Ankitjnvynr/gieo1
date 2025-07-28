import React, { useState } from 'react';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
   
    eventName: '',
    category: '',
    eventDate: '',
    fullName: '',
    gender: '',
    nationality: '',
    dob: '',
    email: '',
    phone: '',
    country: '',
    postalCode: '',
    district: '',
    tehsil: '',
    address: '',
    primaryName: '',
    primaryRelation: '',
    primaryPhone: '',
    primaryEmail: '',
    secondaryName: '',
    secondaryRelation: '',
    secondaryPhone: '',
    secondaryEmail: ''
  });

  const [files, setFiles] = useState({
    profilePhoto: null,
    identityProof: null,
    addressProof: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e, fileType) => {
    setFiles({
      ...files,
      [fileType]: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['orgName', 'eventName', 'category', 'eventDate', 'fullName', 'gender', 'dob', 'email', 'phone', 'country', 'postalCode', 'district', 'tehsil', 'address', 'primaryName', 'primaryRelation', 'primaryPhone'];
    
    const isValid = requiredFields.every(field => formData[field].trim() !== '');
    
    if (isValid) {
      alert('Registration submitted successfully! We will contact you soon.');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #D7CCC8',
    borderRadius: '8px',
    fontSize: '1rem',
    background: '#FAFAFA',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease'
  };

  const focusStyle = {
    borderColor: '#8B4513',
    background: 'white',
    boxShadow: '0 0 0 3px rgba(139, 69, 19, 0.1)',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#5D4037',
    fontSize: '0.95rem'
  };

  const sectionStyle = {
    marginBottom: '40px',
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)',
    borderLeft: '5px solid #8B4513'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  };

  return (
    <div style={{
      margin: 0,
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: ' #ebd5b4ff',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: '#F5F5DC',
        borderRadius: '15px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #ac793fff, #94713aff)',
          color: 'white',
          textAlign: 'center',
          padding: '30px',
          position: 'relative'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            margin: '0 0 10px 0'
          }}>
            Volunteering Registration Form
          </h1>
          <p style={{
            fontSize: '1.1rem',
            opacity: '0.9',
            margin: 0
          }}>
            Join our community and make a difference
          </p>
        </div>

        <div style={{ padding: '40px' }}>
          <form onSubmit={handleSubmit}>
            {/* Vital Information */}
            <section style={sectionStyle}>
              <h2 style={{
                fontSize: '1.4rem',
                color: '#8B4513',
                margin: '0 0 25px 0',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#8B4513',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'inline-block'
                }}></span>
                📋 Vital Information
              </h2>
              <div style={gridStyle}>
                
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Category:</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  >
                    <option value="">Select Volunteer Category</option> <option value="education">Ashram Volunteer</option> <option value="healthcare">Prana Volunteer</option> <option value="environment">Gau Volunteer</option> <option value="community">Program Volunteer</option> <option value="elderly">Tree Plantation Volunteer</option> <option value="children">Teaching Volunteer</option> <option value="disaster">Janamashtmi Volunteer</option> <option value="disaster">Cleaniness Volunteer Volunteer</option> <option value="other">Independence Day Volunteer</option> <option value="other">Food Distribution Volunteer</option>
                  </select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Event Date:</label>
                  <input
                    type="date"
                    name="Arrival Date"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                  
                </div>
              </div>
            </section>

            {/* Personal Information */}
            <section style={sectionStyle}>
              <h2 style={{
                fontSize: '1.4rem',
                color: '#8B4513',
                margin: '0 0 25px 0',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#8B4513',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'inline-block'
                }}></span>
                👤 Personal Information
              </h2>
              <div style={gridStyle}>
                <div style={{ marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Gender:</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Nationality:</label>
                  <input
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                   
                
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
              </div>
            </section>

            {/* Address Details */}
            <section style={sectionStyle}>
              <h2 style={{
                fontSize: '1.4rem',
                color: '#8B4513',
                margin: '0 0 25px 0',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#8B4513',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'inline-block'
                }}></span>
                🏠 Address Details
              </h2>
              <div style={gridStyle}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Country/Province:</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  >
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Postal Code:</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>District/State:</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={labelStyle}>Tehsil/City:</label>
                  <input
                    type="text"
                    name="tehsil"
                    value={formData.tehsil}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
                <div style={{ marginBottom: '20px', gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Full Address:</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your complete address..."
                    style={{
                      ...inputStyle,
                      minHeight: '100px',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                  />
                </div>
              </div>
            </section>

            {/* Photo and ID Proofs */}
            <section style={sectionStyle}>
              <h2 style={{
                fontSize: '1.4rem',
                color: '#8B4513',
                margin: '0 0 25px 0',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#8B4513',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'inline-block'
                }}></span>
                📷 Photo and ID Proofs
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '25px',
                marginTop: '20px'
              }}>
                <div style={{
                  textAlign: 'center',
                  padding: '25px',
                  border: '2px dashed #A0522D',
                  borderRadius: '12px',
                  background: '#FFF8E1',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#8B4513';
                  e.target.style.background = '#F5F5DC';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#A0522D';
                  e.target.style.background = '#FFF8E1';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: files.profilePhoto ? '#4CAF50' : '#D7CCC8',
                    borderRadius: '50%',
                    margin: '0 auto 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: files.profilePhoto ? 'white' : '#8B4513',
                    fontSize: '2rem'
                  }}>
                    {files.profilePhoto ? '✓' : '👤'}
                  </div>
                  <div style={{
                    fontWeight: '600',
                    color: '#5D4037',
                    marginBottom: '10px'
                  }}>Your Recent Photograph</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#8D6E63',
                    marginBottom: '15px',
                    lineHeight: '1.4'
                  }}>Please upload a recent passport-size photograph. Clear, front-facing photo preferred.</div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'profilePhoto')}
                    style={{ display: 'none' }}
                    id="profilePhoto"
                  />
                  <label
                    htmlFor="profilePhoto"
                    style={{
                      background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 5px 15px rgba(139, 69, 19, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Choose File
                  </label>
                </div>

                <div style={{
                  textAlign: 'center',
                  padding: '25px',
                  border: '2px dashed #A0522D',
                  borderRadius: '12px',
                  background: '#FFF8E1',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#8B4513';
                  e.target.style.background = '#F5F5DC';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#A0522D';
                  e.target.style.background = '#FFF8E1';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: files.identityProof ? '#4CAF50' : '#D7CCC8',
                    borderRadius: '50%',
                    margin: '0 auto 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: files.identityProof ? 'white' : '#8B4513',
                    fontSize: '2rem'
                  }}>
                    {files.identityProof ? '✓' : '🆔'}
                  </div>
                  <div style={{
                    fontWeight: '600',
                    color: '#5D4037',
                    marginBottom: '10px'
                  }}>Your Identity Proof</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#8D6E63',
                    marginBottom: '15px',
                    lineHeight: '1.4'
                  }}>Upload a clear photo of your government-issued ID (Passport, Driver's License, etc.)</div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'identityProof')}
                    style={{ display: 'none' }}
                    id="identityProof"
                  />
                  <label
                    htmlFor="identityProof"
                    style={{
                      background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 5px 15px rgba(139, 69, 19, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Choose File
                  </label>
                </div>

                <div style={{
                  textAlign: 'center',
                  padding: '25px',
                  border: '2px dashed #A0522D',
                  borderRadius: '12px',
                  background: '#FFF8E1',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#8B4513';
                  e.target.style.background = '#F5F5DC';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#A0522D';
                  e.target.style.background = '#FFF8E1';
                  e.target.style.transform = 'translateY(0)';
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: files.addressProof ? '#4CAF50' : '#D7CCC8',
                    borderRadius: '50%',
                    margin: '0 auto 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: files.addressProof ? 'white' : '#8B4513',
                    fontSize: '2rem'
                  }}>
                    {files.addressProof ? '✓' : '🏠'}
                  </div>
                  <div style={{
                    fontWeight: '600',
                    color: '#5D4037',
                    marginBottom: '10px'
                  }}>Your Address Proof</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#8D6E63',
                    marginBottom: '15px',
                    lineHeight: '1.4'
                  }}>Upload address verification document (Utility bill, Bank statement, etc.)</div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'addressProof')}
                    style={{ display: 'none' }}
                    id="addressProof"
                  />
                  <label
                    htmlFor="addressProof"
                    style={{
                      background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-1px)';
                      e.target.style.boxShadow = '0 5px 15px rgba(139, 69, 19, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </section>

            {/* Emergency Contact Details */}
            <section style={sectionStyle}>
              <h2 style={{
                fontSize: '1.4rem',
                color: '#8B4513',
                margin: '0 0 25px 0',
                display: 'flex',
                alignItems: 'center',
                fontWeight: '600'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: '#8B4513',
                  borderRadius: '50%',
                  marginRight: '15px',
                  display: 'inline-block'
                }}></span>
                🚨 Emergency Contact Details
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
              }}>
                <div style={{
                  background: '#FFF8E1',
                  padding: '25px',
                  borderRadius: '10px',
                  border: '1px solid #D7CCC8'
                }}>
                  <h4 style={{
                    color: '#8B4513',
                    marginBottom: '20px',
                    fontSize: '1.1rem'
                  }}>
                    📞 Primary Emergency Contact Details
                  </h4>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Name:</label>
                    <input
                      type="text"
                      name="primaryName"
                      value={formData.primaryName}
                      onChange={handleInputChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Relation:</label>
                    <select
                      name="primaryRelation"
                      value={formData.primaryRelation}
                      onChange={handleInputChange}
                      required
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    >
                      <option value="">Select Relation</option>
                      <option value="parent">Parent</option>
                      <option value="spouse">Spouse</option>
                      <option value="sibling">Sibling</option>
                      <option value="friend">Friend</option>
                      <option value="relative">Relative</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Phone:</label>
                    <input
                      type="tel"
                      name="primaryPhone"
                      value={formData.primaryPhone}
                      onChange={handleInputChange}
                      required
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Email:</label>
                    <input
                      type="email"
                      name="primaryEmail"
                      value={formData.primaryEmail}
                      onChange={handleInputChange}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    />
                  </div>
                </div>

                <div style={{
                  background: '#FFF8E1',
                  padding: '25px',
                  borderRadius: '10px',
                  border: '1px solid #D7CCC8'
                }}>
                  <h4 style={{
                    color: '#8B4513',
                    marginBottom: '20px',
                    fontSize: '1.1rem'
                  }}>
                    📱 Secondary Emergency Contact Details
                  </h4>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Name:</label>
                    <input
                      type="text"
                      name="secondaryName"
                      value={formData.secondaryName}
                      onChange={handleInputChange}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Relation:</label>
                    <select
                      name="secondaryRelation"
                      value={formData.secondaryRelation}
                      onChange={handleInputChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    >
                      <option value="">Select Relation</option>
                      <option value="parent">Parent</option>
                      <option value="spouse">Spouse</option>
                      <option value="sibling">Sibling</option>
                      <option value="friend">Friend</option>
                      <option value="relative">Relative</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Phone:</label>
                    <input
                      type="tel"
                      name="secondaryPhone"
                      value={formData.secondaryPhone}
                      onChange={handleInputChange}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={labelStyle}>Email:</label>
                    <input
                      type="email"
                      name="secondaryEmail"
                      value={formData.secondaryEmail}
                      onChange={handleInputChange}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: '#D7CCC8', background: '#FAFAFA', boxShadow: 'none' })}
                    />
                  </div>
                </div>
              </div>
            </section>

            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                color: 'white',
                border: 'none',
                padding: '18px 50px',
                fontSize: '1.2rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'block',
                margin: '40px auto 0',
                boxShadow: '0 10px 30px rgba(139, 69, 19, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 40px rgba(139, 69, 19, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.3)';
              }}
              onMouseDown={(e) => {
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseUp={(e) => {
                e.target.style.transform = 'translateY(-3px)';
              }}
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}