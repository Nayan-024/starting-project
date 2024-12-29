export default function CoreConcept({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.tilte} />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// }
