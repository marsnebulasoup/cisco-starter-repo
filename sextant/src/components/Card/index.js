import "./styles.css";

export function Card(props) {
  return (
    <div class="card">
      <div class="card-title">{props.title}</div>
      <div class="card-content">{props.content}</div>
    </div>
  );
}