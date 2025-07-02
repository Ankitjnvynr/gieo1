import React from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 20px',
    backgroundColor: '#f9f5f1',
    gap: '40px',
    flexWrap: 'wrap',
    paddingLeft: '10rem',
    paddingRight: '10rem',

  },
  text: {
    flex: 1,
    minWidth: '300px',
    padding: '20px',
  },
  heading: {
    color: '#c96f1c',
    marginBottom: '20px',
    fontSize: '1.8rem',
  },
  paragraph: {
    fontSize: '1.5rem',
    color: '#333',
    lineHeight: '1.7',
  },
  imageContainer: {
    flex: 1,
    minWidth: '300px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  },
};

const Hero = () => {
  return (
    <div style={styles.container} id='textsection'>
      <div style={styles.text}>
        <h2 style={styles.heading}>Educational Programs of GIEO Gita</h2>
        <p style={styles.paragraph}>
          GIEO Gita is a spiritual and educational platform dedicated to spreading the divine wisdom of the Shrimad Bhagavad Gita to the masses. This platform is not limited to religious discourses alone; it also conducts a variety of educational programs that serve as guiding lights for students, youth, teachers, and the general public.
          <br /><br />
          These programs include key initiatives such as the Gita Vidya Curriculum, Bal Sanskar Camps, Campus Gita Program, and Ideal Teacher Training. 
          <br /><br />
          By integrating the core principles of Indian culture and life with modern education, this platform paves the way for holistic personality development.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/assets/images/education/main.jpg"
          alt="Gieo Gita Education"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default Hero;
