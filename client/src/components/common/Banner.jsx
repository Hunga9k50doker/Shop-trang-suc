
export const Banner = (props) => {
 
  return (
    <div className={`banner `} style={props.style}>
      <div
        className={`banner__body ${
          props.classNameSub ? props.classNameSub : ""
        }`}
      >
        <p data-aos="fade-down" className="banner__solgan">
          {props.sologan}
        </p>
        <h3 data-aos="zoom-in" className="banner__title">
          {props.title}
        </h3>
        <div data-aos="fade-up" className="banner__subtitle">
          {props.subtitle}
        </div>
        {props.children}
      </div>
      <img 
      
      className="banner__img" src={props.img} alt="" />
    </div>
  );
};
