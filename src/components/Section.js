const Section = ({ textH2, text1, text2 }) => {
  return (
    <>
      <h2>{textH2}</h2>
      <div className="class-div">
        <p>{text1} - </p>
        <p>{text2} -</p>
      </div>
      <div className="class-div"></div>
    </>
  );
};

export default Section;
