import "./styles.css";
import { useState } from 'react';


export function Card(props) {
  const [content, setContent] = useState("Loading...");

  props.content().then(setContent);

  return (
    <div class="card">
      <div class="card-title">{props.title}</div>
      <div class="card-content">{content}</div>
    </div>
  );
}